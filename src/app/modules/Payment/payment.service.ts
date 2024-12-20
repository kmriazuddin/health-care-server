import prisma from "../../../shared/prisma";
import { sslService } from "../SSL/ssl.service";
import { PaymentStatus } from "@prisma/client";

const initPayment = async (appointmentId: string) => {
  const paymentData = await prisma.payment.findFirstOrThrow({
    where: {
      appointmentId,
    },
    include: {
      appointment: {
        include: {
          patient: true,
        },
      },
    },
  });

  const initPaymentData = {
    name: paymentData.appointment.patient.name,
    email: paymentData.appointment.patient.email,
    phoneNumber: paymentData.appointment.patient.contactNumber,
    address: paymentData.appointment.patient.address,
    amount: paymentData.amount,
    transactionId: paymentData.transactionId,
  };

  const result = await sslService.initPayment(initPaymentData);
  return {
    paymentURL: result.GatewayPageURL,
  };
};

const validatePayment = async (payload: any) => {
  // Automatic => Server Host Then It Is Work Otherwise Manually
  // if (!payload || !payload.status || !(payload.status === "VALID")) {
  //   return {
  //     message: "Invalid payment!",
  //   };
  // }

  // const response = await sslService.validatePayment(payload);

  // if (response?.status !== "VALID") {
  //   return {
  //     message: "Payment Failed!",
  //   };
  // }

  // Manually Implement
  const response = payload;

  await prisma.$transaction(async (tx) => {
    const updatedPaymentData = await tx.payment.update({
      where: {
        transactionId: response.tran_id,
      },
      data: {
        status: PaymentStatus.PAID,
        paymentGatewayData: response,
      },
    });

    await tx.appointment.update({
      where: {
        id: updatedPaymentData.appointmentId,
      },
      data: {
        paymentStatus: PaymentStatus.PAID,
      },
    });
  });

  return {
    message: "Payment Success!",
  };
};

export const paymentService = {
  initPayment,
  validatePayment,
};

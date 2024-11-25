package com.utec.tutoringapp.payment.domain;

import org.springframework.stereotype.Service;
import com.utec.tutoringapp.payment.dto.PaymentRequest;

@Service
public class PaymentService {

    public String createPayment(PaymentRequest request) {
        // Logic to integrate with MercadoPago API
        return "https://mercadopago-dummy-payment-url";
    }
}

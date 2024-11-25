package com.utec.tutoringapp.payment.application;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.utec.tutoringapp.payment.domain.PaymentService;
import com.utec.tutoringapp.payment.dto.PaymentRequest;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createPayment(@RequestBody PaymentRequest request) {
        String paymentUrl = paymentService.createPayment(request);
        return ResponseEntity.ok(paymentUrl);
    }
}

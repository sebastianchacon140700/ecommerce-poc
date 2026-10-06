/**
 * Payment Gateway Interface (Strategy Pattern)
 * 
 * By using this interface, our core checkout flow is completely decoupled 
 * from the specific payment provider (PayPal, Stripe, etc.).
 * 
 * If we need to add Stripe in the future, we simply create a new class 
 * that implements this interface, requiring ZERO changes to the checkout UI 
 * or the core order processing logic.
 */

export interface PaymentIntent {
  amount: number;
  currency: string;
  orderId: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

export interface PaymentGateway {
  /**
   * Initializes the payment intent with the provider
   */
  initializePayment(intent: PaymentIntent): Promise<string>;

  /**
   * Processes the actual transaction
   */
  processPayment(transactionToken: string): Promise<PaymentResult>;

  /**
   * Handles secure webhooks from the payment provider to verify 
   * successful transactions on the server side.
   */
  handleWebhook(payload: any, signature: string): Promise<boolean>;
}

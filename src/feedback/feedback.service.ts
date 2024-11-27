import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedbackService {
  private feedbacks = []; // In-memory storage for feedback

  saveFeedback(feedbackData: { name: string, email: string, rating: number, review: string }) {
    this.feedbacks.push(feedbackData); // Add new feedback to the array
    console.log('Feedbacks:', this.feedbacks); // Log all feedbacks for debugging
    return { message: 'Feedback submitted successfully!', feedbacks: this.feedbacks };
  }

  getAllFeedbacks() {
    return this.feedbacks; // Retrieve all stored feedback
  }
}

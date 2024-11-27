import { Controller, Post, Get, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  submitFeedback(
    @Body()
    feedbackData: {
      name: string;
      email: string;
      rating: number;
      review: string;
    },
  ) {
    return this.feedbackService.saveFeedback(feedbackData);
  }

  @Get()
  getAllFeedbacks() {
    return this.feedbackService.getAllFeedbacks();
  }
}

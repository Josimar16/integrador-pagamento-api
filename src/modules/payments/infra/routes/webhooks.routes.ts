import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { ListenWebhookController } from "../../usecases/listenWebhook/ListenWebhookController";

@Controller('webhooks')
export class WebhooksRouter {
  constructor(
    private readonly listenWebhookController: ListenWebhookController
  ) { }

  @Post()
  public async listen(@Req() request: Request): Promise<void> {
    return this.listenWebhookController.handle(request);
  }
}
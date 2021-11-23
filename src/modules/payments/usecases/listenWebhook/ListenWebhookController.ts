import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class ListenWebhookController {
  public async handle(request: Request): Promise<void> {
    console.log(request);
    return;
  }
}
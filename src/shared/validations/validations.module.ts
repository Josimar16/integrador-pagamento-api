import { Module } from "@nestjs/common";
import { ParamsPagination } from "./ParamsPagination.pipe";

@Module({
  providers: [ParamsPagination],
  exports: [ParamsPagination]
})
export class ValidationsPipe { }
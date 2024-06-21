import { Module } from "@nestjs/common";
import { GrtgbeModuleBase } from "./base/grtgbe.module.base";
import { GrtgbeService } from "./grtgbe.service";
import { GrtgbeController } from "./grtgbe.controller";
import { GrtgbeResolver } from "./grtgbe.resolver";

@Module({
  imports: [GrtgbeModuleBase],
  controllers: [GrtgbeController],
  providers: [GrtgbeService, GrtgbeResolver],
  exports: [GrtgbeService],
})
export class GrtgbeModule {}

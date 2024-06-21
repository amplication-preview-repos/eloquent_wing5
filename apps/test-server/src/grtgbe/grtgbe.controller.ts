import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GrtgbeService } from "./grtgbe.service";
import { GrtgbeControllerBase } from "./base/grtgbe.controller.base";

@swagger.ApiTags("grtgbes")
@common.Controller("grtgbes")
export class GrtgbeController extends GrtgbeControllerBase {
  constructor(protected readonly service: GrtgbeService) {
    super(service);
  }
}

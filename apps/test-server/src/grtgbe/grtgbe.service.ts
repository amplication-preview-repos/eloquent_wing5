import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GrtgbeServiceBase } from "./base/grtgbe.service.base";

@Injectable()
export class GrtgbeService extends GrtgbeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

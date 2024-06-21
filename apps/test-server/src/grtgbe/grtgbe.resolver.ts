import * as graphql from "@nestjs/graphql";
import { GrtgbeResolverBase } from "./base/grtgbe.resolver.base";
import { Grtgbe } from "./base/Grtgbe";
import { GrtgbeService } from "./grtgbe.service";

@graphql.Resolver(() => Grtgbe)
export class GrtgbeResolver extends GrtgbeResolverBase {
  constructor(protected readonly service: GrtgbeService) {
    super(service);
  }
}

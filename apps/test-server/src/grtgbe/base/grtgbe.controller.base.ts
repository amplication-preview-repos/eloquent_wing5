/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrtgbeService } from "../grtgbe.service";
import { GrtgbeCreateInput } from "./GrtgbeCreateInput";
import { Grtgbe } from "./Grtgbe";
import { GrtgbeFindManyArgs } from "./GrtgbeFindManyArgs";
import { GrtgbeWhereUniqueInput } from "./GrtgbeWhereUniqueInput";
import { GrtgbeUpdateInput } from "./GrtgbeUpdateInput";

export class GrtgbeControllerBase {
  constructor(protected readonly service: GrtgbeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Grtgbe })
  async createGrtgbe(@common.Body() data: GrtgbeCreateInput): Promise<Grtgbe> {
    return await this.service.createGrtgbe({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Grtgbe] })
  @ApiNestedQuery(GrtgbeFindManyArgs)
  async grtgbes(@common.Req() request: Request): Promise<Grtgbe[]> {
    const args = plainToClass(GrtgbeFindManyArgs, request.query);
    return this.service.grtgbes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Grtgbe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async grtgbe(
    @common.Param() params: GrtgbeWhereUniqueInput
  ): Promise<Grtgbe | null> {
    const result = await this.service.grtgbe({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Grtgbe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGrtgbe(
    @common.Param() params: GrtgbeWhereUniqueInput,
    @common.Body() data: GrtgbeUpdateInput
  ): Promise<Grtgbe | null> {
    try {
      return await this.service.updateGrtgbe({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Grtgbe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGrtgbe(
    @common.Param() params: GrtgbeWhereUniqueInput
  ): Promise<Grtgbe | null> {
    try {
      return await this.service.deleteGrtgbe({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
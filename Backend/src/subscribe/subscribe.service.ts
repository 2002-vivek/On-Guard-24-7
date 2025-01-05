import { ConflictException, HttpException, Injectable } from "@nestjs/common";
import { SubscribeDto } from "./subscribe.Dto";
import { Subscribe, SubscribeDocument } from "./schemas/subscribe.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model} from "mongoose";
import { MongoServerError } from 'mongodb';



@Injectable()
export class SubscribeService{

    constructor(@InjectModel(Subscribe.name) private subscribeModel: Model<SubscribeDocument>){}

    async subscribe(subscribeDto: SubscribeDto): Promise<Subscribe>{
        const existingSubscriber = await this.subscribeModel.findOne({email:subscribeDto.email});
        if (existingSubscriber) {
            throw new ConflictException('Email Already Subscribed');
        }
        const newSubscriber = new this.subscribeModel(subscribeDto);
        return await newSubscriber.save();
        
    }
}
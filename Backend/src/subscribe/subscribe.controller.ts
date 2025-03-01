import { Body, ConflictException, Controller, Post } from "@nestjs/common";
import { SubscribeService } from "./subscribe.service";
import { SubscribeDto } from "./subscribe.Dto";

@Controller('subscribe')
export class SubscribeController{
    constructor(private readonly subscribeService: SubscribeService){}

    @Post()
    async subscribe(@Body() subscriptionDto: SubscribeDto){
        try{
            const savedSubscription = await this.subscribeService.subscribe(subscriptionDto);
            return {success: true, message:'Subscription saved Successfully', data: savedSubscription};
        } catch(error) {
            if(error instanceof ConflictException) {
                return{
                    success:false,
                    message: error.message,
                };
            }
            throw error
        }
        
    }
    
}
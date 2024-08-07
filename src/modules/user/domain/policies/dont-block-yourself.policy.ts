import { RequestAuth } from '@modules/auth/domain/strategies';
import { ModuleRef } from '@nestjs/core';
import { Policy } from '@shared/app/abstractClass';
import { UserPolicyService } from '../services';

export class DontBlockYourselfPolicy extends Policy
{
    async handle(request: RequestAuth, moduleRef: ModuleRef)
    {
        const service =  moduleRef.get(UserPolicyService);
        await service.checkDontBlockYourselfPolicy(request.user.data._id, request.params['id']);
    }
}

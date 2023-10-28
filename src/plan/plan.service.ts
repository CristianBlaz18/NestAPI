import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';
import { Beneficio } from './entities/plan-beneficio.entity';



@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
    @InjectRepository(Beneficio) 
    private readonly beneficioRepository: Repository<Beneficio>,
  ) {}
  async getPlansByInstitucion(institucionId: number): Promise<Plan[]> {
    const plans = await this.planRepository.query('CALL sp_listar_plan_institucion(?)', [institucionId]);
    return plans;
  }
  async getBenefitsByPlan(planIds: number): Promise<Beneficio[]> {
    const benefits = await this.beneficioRepository.query('CALL sp_listar_beneficios_x_plan(?)', [planIds]);
    return benefits;
  }

  
  
  create(createPlanDto: CreatePlanDto) {
    return 'This action adds a new plan';
  }

  findAll() {
    return `This action returns all plan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Beneficio } from './entities/plan-beneficio.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Plan')
@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}
  
  @Get(':institucionId')
  async getPlansByInstitucion(@Param('institucionId') institucionId: number) {
    const results = await this.planService.getPlansByInstitucion(institucionId);

    if (results[0] && Array.isArray(results[0])) {
      const mappedPlans = results[0].map((plan: any) => ({
        id: plan.plan_id,
        nombre: plan.plan_nombre,
        precioSoles: plan.plan_precio_soles,
        precioDolares: plan.plan_precio_dolar,
        beneficios: [],
      }));
      
      for (const plan of mappedPlans) {
        const benefits = await this.planService.getBenefitsByPlan(plan.id);
        
        // Verifica si benefits[0] es un array antes de usar map
        if (Array.isArray(benefits[0])) {
          plan.beneficios = benefits[0].map((beneficio: any) => ({
            id: beneficio.plan_beneficios_id,
            descripcion: beneficio.plan_beneficios_descripcion,
            limite: beneficio.plan_beneficios_limite,
            id_plan: beneficio.plan_id,
          }));
        }
        
      }
      
      
      return mappedPlans;
    } else {
      return [];
    }
  }

  // @Post()
  // create(@Body() createPlanDto: CreatePlanDto) {
  //   return this.planService.create(createPlanDto);
  // }

  // @Get()
  // findAll() {
  //   return this.planService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.planService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
  //   return this.planService.update(+id, updatePlanDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.planService.remove(+id);
  // }
}

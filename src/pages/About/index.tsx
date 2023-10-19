import { Separator } from '@/components/ui/separator';
import DtSvg  from '@/components/dtSvg'

const About = () => {

  return (
    <div className='w-full absolute mt-16'>
      <div className=' py-10 mr-2'>
        <p className='ps-4 text-4xl'>Biz Kimiz ?</p>
      </div>
      <Separator className="" />
      <div className="flex flex-col-reverse md:flex-row items-center space-x-2 text-sm px-16 pt-16">
        <div className='pe-32 mt-2'>
          <p className='text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rerum nisi. 
          Voluptates, ut alias vero obcaecati rerum consequatur. Cum quos explicabo facilis porro! 
          Blanditiis accusamus sapiente porro consequatur aspernatur vitae.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rerum nisi. 
          Voluptates, ut alias vero obcaecati rerum consequatur. Cum quos explicabo facilis porro! 
          Blanditiis accusamus sapiente porro consequatur aspernatur vitae.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rerum nisi. 
          Voluptates, ut alias vero obcaecati rerum consequatur. Cum quos explicabo facilis porro! 
          Blanditiis accusamus sapiente porro consequatur aspernatur vitae.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rerum nisi. 
          Voluptates, ut alias vero obcaecati rerum consequatur. Cum quos explicabo facilis porro! 
          Blanditiis accusamus sapiente porro consequatur aspernatur vitae.
          </p>
        </div>
        <div className='px-12 inline-block opacity-10 mr-16 mt-4 md:mt-0'>
          <DtSvg width='148px' height='148px' fill='black' />
        </div>
      </div>
    </div>
  );
};

export default About;
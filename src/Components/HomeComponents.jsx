import SectionOne from '../Pages/SectionOne'
import SectionTwo from '../Pages/SectionTwo'
import SectionThree from '../Pages/SectionThree'
import SectionFour from '../Pages/SectionFour'
import SectionFive from '../Pages/SectionFive'
const HomeComponents = () => {
  return (
    <div className='bg-gray-900 text-white w-full'>
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
    </div>
  )
}

export default HomeComponents

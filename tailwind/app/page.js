import Colors from '@/Components/Colors'
import { Grids } from '@/Components/Grids'
import ScreensSpacing from '@/Components/Screens&Spacing'
import Sizes from '@/Components/Sizes'
import TypoGraphy from '@/Components/TypoGraphy'
import Flex from '@/Components/flex'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" text-8xl text-center">Colors</h1>
      <Colors />
      {/**This componets shows how tailwind color classes are used */}
      <h1 className=" text-8xl text-center">ScreensSpacing</h1>
      <ScreensSpacing />{' '}
      {/**This componets shows the different screen breakpoints and how we can adjust data acoordingly */}
      <h1 className=" text-8xl text-center">TypoGraphy</h1>
      <TypoGraphy />
      {/**This componets contains all the properties that could be modifed on a text */}
      <h1 className=" text-8xl text-center">Sizes</h1>
      <Sizes />{' '}
      {/**This component disccuses different ways width, height, padding and spacing is used. */}
      <Flex />
      <Grids />
    </div>
  )
}

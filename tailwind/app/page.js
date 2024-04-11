import Colors from '@/Components/Colors'
import ScreensSpacing from '@/Components/Screens&Spacing'
import TypoGraphy from '@/Components/TypoGraphy'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" flex flex-col gap-3">
      <Colors />
      {/**This componets shows how tailwind color classes are used */}
      <ScreensSpacing />{' '}
      {/**This componets shows the different screen breakpoints and how we can adjust data acoordingly */}
      <TypoGraphy />
    </div>
  )
}

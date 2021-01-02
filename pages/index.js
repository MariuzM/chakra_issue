import { Stack, Text } from '@chakra-ui/react'

const boxes = ['Box1', 'Box2', 'Box3', 'Box4', 'Box5']

export default function Home() {
  return (
    <>
      <Stack bg="#F12455" d="flex" flexDir="row" flexWrap="wrap">
        {boxes.map((item, idx) => {
          return (
            <Stack key={idx} m="20px" bg="#F96565" minH="100px" minW="100px">
              <Text>{item}</Text>
            </Stack>
          )
        })}
      </Stack>

      <br />

      <Stack bg="#F12455" d="flex" flexDir="row" flexWrap="wrap">
        {boxes.map((item, idx) => {
          return (
            <Stack key={idx} m="20px !important" bg="#F96565" minH="100px" minW="100px">
              <Text>{item}</Text>
            </Stack>
          )
        })}
      </Stack>
    </>
  )
}

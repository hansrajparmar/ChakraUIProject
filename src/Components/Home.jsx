import { Box, Container, Heading, Image,Text, Stack } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/5.png";

const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  p:"4",
  size:"3xl"
}


const Home = () => {
  return(
    <Box>
      <MyCarousel/>

      <Container maxW={"container.xl"} minH={"100vh"} p="16">
        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto" >services</Heading>

        <Stack h="full" p={"4"} alignItems={"center"} direction={["column", "row"]}>
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus quasi provident placeat distinctio
             consequatur saepe facere amet quis enim aliquam voluptatibus mollitia, a, voluptate, voluptas impedit
              accusamus doloremque repellat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga praesentium,
               vel explicabo excepturi similique qui odit. Rerum nemo architecto a nesciunt nam,a nesciunt na
                corrupti ipsa nihil commodi vel possimus deleniti impedit? rum nemo architecto a nesciunt na
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus quasi provident placeat distinctio
             consequatur saepe facere amet quis enim aliquam voluptatibus mollitia, a, voluptate, voluptas impedit
              accusamus doloremque repellat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga praesentium,
               vel explicabo excepturi similique qui odit. Rerum nemo architecto a nesciunt nam,
                corrupti ipsa nihil commodi vel possimus deleniti impedit? Rerum nemo architecto a nesciunt nam,
               

          </Text>

        </Stack>

      </Container>
    </Box>
  );
};

const MyCarousel = () =>(
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w="full" h={"100vh"}>
      
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >
          Watch the Future
      </Heading>

    </Box>

    <Box w="full" h={"100vh"}>
      
      <Image src={img2} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >
        Future is Gaming
      </Heading>

    </Box>

    <Box w="full" h={"100vh"}>
      
      <Image src={img3} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >
        GAMING ON CONSOLE
      </Heading>

    </Box>

    <Box w="full" h={"100vh"}>
      
      <Image src={img4} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions} >
        NIGHT LIFE IS COOL
      </Heading>

    </Box>


  </Carousel>
)


export default Home

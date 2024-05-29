import { Box, Container, VStack, HStack, Text, Input, Button, Image, Flex, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.600" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">TravelBooking</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Destinations</Link>
            <Link href="#" color="white">Bookings</Link>
            <Link href="#" color="white">Contact Us</Link>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/images/hero-background.jpg')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        py={20}
      >
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Discover Your Next Adventure</Heading>
          <Text fontSize="xl" mb={8}>Find the best deals on flights, hotels, and car rentals</Text>
          <VStack spacing={4} align="center">
            <Input placeholder="Search for flights, hotels, car rentals..." size="lg" width="50%" />
            <Button colorScheme="teal" size="lg">Search</Button>
          </VStack>
        </Container>
      </Box>

      {/* Featured Destinations */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Featured Destinations</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
              <Image src="/images/destination1.jpg" alt="Destination 1" mb={4} borderRadius="md" />
              <Heading as="h4" size="md">Destination 1</Heading>
              <Text mt={2}>Explore the beauty of Destination 1</Text>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
              <Image src="/images/destination2.jpg" alt="Destination 2" mb={4} borderRadius="md" />
              <Heading as="h4" size="md">Destination 2</Heading>
              <Text mt={2}>Discover the wonders of Destination 2</Text>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
              <Image src="/images/destination3.jpg" alt="Destination 3" mb={4} borderRadius="md" />
              <Heading as="h4" size="md">Destination 3</Heading>
              <Text mt={2}>Experience the charm of Destination 3</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Customer Reviews */}
      <Box as="section" bg="gray.50" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Customer Reviews</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text>"Amazing experience! Highly recommend."</Text>
              <Text mt={4} fontWeight="bold">- Customer 1</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text>"Great deals and excellent service."</Text>
              <Text mt={4} fontWeight="bold">- Customer 2</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text>"Will definitely book again!"</Text>
              <Text mt={4} fontWeight="bold">- Customer 3</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Newsletter Signup */}
      <Box as="section" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h3" size="xl" mb={8}>Sign Up for Our Newsletter</Heading>
          <VStack spacing={4} align="center">
            <Input placeholder="Enter your email address" size="lg" width="50%" />
            <Button colorScheme="teal" size="lg">Subscribe</Button>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" py={10}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 TravelBooking. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaInstagram /></Link>
          </HStack>
          <HStack spacing={8}>
            <Link href="#" color="white">Terms of Service</Link>
            <Link href="#" color="white">Privacy Policy</Link>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
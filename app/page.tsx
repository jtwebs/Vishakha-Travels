"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  MessageCircle,
  Users,
  Snowflake,
  Shield,
  MapPin,
  Star,
  Route,
  Heart,
  CheckCircle,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function ForceTravellerSolapur() {
  // Images for hero section carousel
  const heroImages = [
    { src: "ertiga.png", alt: "Ertiga 7 Seater" },
    { src: "swiftdzire.jpeg", alt: "Swift Dzire 5 Seater" },
    { src: "traxx.png", alt: "Cruiser 12 Seater" },
    { src: "Group 1.png", alt: "Force Traveller 20 Seater" },
    { src: "innova.png", alt: "Innova Crysta 7 Seater" },
    { src: "bolero.png", alt: "Bolero 12 Seater" },
  ]
  const [heroIdx, setHeroIdx] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
              <Route className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-[0.75rem] sm:text-lg font-bold text-gray-900">Vishakha Tours & Travels</h1>
              <p className="text-xs text-gray-600">Bus & Cars</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* <Button size="sm" className="bg-green-600 hover:bg-green-700 hidden md:flex">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button> */}
            <a
  href="https://api.whatsapp.com/send?phone=919657224555&text=Hello"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full shadow-lg animate-pulse">
    <MessageCircle className="h-6 w-6 mr-2" />
    WhatsApp
  </Button>
</a>
<a href="tel:+919657224555">
<Button size="sm" variant="outline" className="hidden md:flex bg-transparent">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button></a>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 md:py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
            {/* Image always visible and first on mobile */}
            <div className="relative w-full lg:w-1/2 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden  block lg:hidden mb-4">
                <Image
                  src={"/" + heroImages[heroIdx].src}
                  alt={heroImages[heroIdx].alt}
                  width={400}
                  height={240}
                  className="w-full h-[340px] object-contain mix-blend-darken transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 hidden bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-0 w-full flex justify-center items-center text-black">
                  <p className="text-sm text-center font-medium">{heroImages[heroIdx].alt}</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden hidden lg:block">
                <Image
                  src={"/" + heroImages[heroIdx].src}
                  alt={heroImages[heroIdx].alt}
                  width={700}
                  height={500}
                  className="w-full h-[640px] object-contain mix-blend-darken transition-all duration-700"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-0 w-full flex justify-center items-center text-black">
                  <p className="text-sm font-medium text-center">{heroImages[heroIdx].alt}</p>
                </div>
              </div>
            </div>

            {/* Text and Buttons */}
            <div className="space-y-4 w-full lg:w-1/2">
              <div className="space-y-2 md:space-y-4">
                <Badge className="w-fit bg-orange-100 text-orange-800 border-orange-200 text-xs md:text-base">
                  🚌 All Type of Cars & Bus available
                </Badge>
                <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl text-gray-900">
                  Book Your <span className="text-orange-600">Bus</span> or <span className="text-orange-600">Car</span> from
                  <span className="text-orange-600"> Solapur</span> – Travel Anywhere in India
                </h1>
                <p className="text-base md:text-xl text-gray-600 font-medium">Comfort • Safety • Door-to-Door Service</p>
                <p className="text-sm md:text-lg text-gray-600">
                  Experience premium travel across India with our well-maintained Force Traveller. Perfect for family
                  trips, pilgrimages, and group tours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                 <a className="w-full"
          href="https://api.whatsapp.com/send?phone=919657224555&text=Hello"
          target="_blank"
          rel="noopener noreferrer"
        >
  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-base md:text-lg px-6 md:px-8">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </Button>
        </a>
              <a className="w-full" href="tel:+919657224555">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-base md:text-lg px-6 md:px-8 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call to Book
                </Button>
              </a>
                
              </div>

              <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Instant WhatsApp Response</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>All India Permit</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>12+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights/Features */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Force Traveller?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium features and experienced service for your comfortable journey
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center border-orange-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mx-auto">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">All Type of Cars & Bus available</CardTitle>
                <CardDescription>Comfortable reclining seats for long journeys</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto">
                  <Snowflake className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Full AC</CardTitle>
                <CardDescription>Climate controlled comfort in all weather</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Experienced Driver</CardTitle>
                <CardDescription>Local expert with 12+ years experience</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">All-India Permit</CardTitle>
                <CardDescription>Travel anywhere across India legally</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>



      {/* Bus Specifications */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Bus Specifications</h2>
            <p className="text-lg text-gray-600">Complete details of our Force Traveller</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Bus Availability</span>
                      <span className="text-gray-900 font-semibold">20 Passengers</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Cars</span>
                      <span className="text-gray-900 font-semibold">5-12 Seater</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Air Conditioning</span>
                      <span className="text-gray-900 font-semibold">Full AC</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Safety Features</span>
                      <span className="text-gray-900 font-semibold">Seat Belts, First Aid</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Luggage Space</span>
                      <span className="text-gray-900 font-semibold">Ample Boot Space</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Entertainment</span>
                      <span className="text-gray-900 font-semibold">Music System, USB</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Permit</span>
                      <span className="text-gray-900 font-semibold">All India Tourist</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Insurance</span>
                      <span className="text-gray-900 font-semibold">Comprehensive</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Cars & Bus Gallery</h2>
            <p className="text-lg text-gray-600">See our well-maintained Cars & Bus Gallery</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative group">
              <Image
                src="ertiga.png"
                alt="Bus Exterior - Side View"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                <p className="text-white p-4 font-medium">Ertiga 7 Seater</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="swiftdzire.png"
                alt="Bus Interior - Comfortable Seats"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                <p className="text-white p-4 font-medium">Swift Dzire 5 Seater</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="traxx.png"
                alt="Driver Area - Professional Setup"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                <p className="text-white p-4 font-medium">Cruiser 12 Seater</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="Group 1.png"
                alt="Luggage Space - Ample Storage"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                <p className="text-white p-4 font-medium">Force Traveller 20 Seater</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="innova.png"
                alt="AC System - Climate Control"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                <p className="text-white p-4 font-medium">Innova Crysta 7 Seater</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="bolero.png"
                alt="Entertainment - Music System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                <p className="text-white p-4 font-medium">Bolero 12 Seater</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Popular Routes from Solapur</h2>
            <p className="text-lg text-gray-600">Choose your destination or plan a custom trip</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-orange-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
                      Shirdi
                    </CardTitle>
                    <CardDescription className="text-gray-600">Sacred pilgrimage • 4-5 hours journey</CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Visit the holy shrine of Sai Baba. Perfect for family pilgrimages with comfortable travel.
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                      Goa
                    </CardTitle>
                    <CardDescription className="text-gray-600">Beach paradise • 8-9 hours journey</CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Enjoy the beaches and nightlife. Comfortable overnight journey with AC comfort.
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      Pune
                    </CardTitle>
                    <CardDescription className="text-gray-600">IT hub • 3-4 hours journey</CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Business trips, shopping, or connecting flights. Quick and comfortable journey.
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                      Hyderabad
                    </CardTitle>
                    <CardDescription className="text-gray-600">Tech city • 6-7 hours journey</CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Visit the city of pearls. Historical sites, biryani, and modern attractions.
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-red-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                      Mumbai
                    </CardTitle>
                    <CardDescription className="text-gray-600">Financial capital • 5-6 hours journey</CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Business meetings, airport transfers, or sightseeing in the city of dreams.
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-yellow-100 hover:shadow-lg transition-shadow cursor-pointer group bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-yellow-600 transition-colors">
                      Custom Trip
                    </CardTitle>
                    <CardDescription className="text-gray-600">Your choice • Anywhere in India</CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Plan your own itinerary. We'll take you anywhere across India with our All-India permit.
                  </p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Book Direct with Us?</h2>
            <p className="text-lg text-gray-600">Experience the difference of personalized service</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mx-auto">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Personalized Pickup</h3>
              <p className="text-gray-600">
                Door-to-door service from your location in Solapur. No need to come to bus stand.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto">
                <Route className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Flexible Itinerary</h3>
              <p className="text-gray-600">Customize your route, stops, and timing. We adapt to your travel needs.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Same Trusted Driver</h3>
              <p className="text-gray-600">
                Vishakha Tours & Travel personally drives every trip. Consistent, reliable service.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Transparent Quote</h3>
              <p className="text-gray-600">
                Get instant quote on WhatsApp. No hidden charges, clear pricing structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from satisfied travelers</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-orange-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Vishakha Tours & Travels treated us like family during our Shirdi trip. The bus was clean, AC worked perfectly,
                  and he knew all the best places to stop for food. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">PS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Family Trip to Shirdi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent service for our Goa trip! The journey was comfortable, and Driver was very
                  professional. Fair pricing and no hidden charges. Will book again!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">SG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sakshi Gautam</p>
                    <p className="text-sm text-gray-600">Group Trip to Goa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Booked for office trip to Pune. Punctual pickup, safe driving, and very reasonable rates. The bus was
                  well-maintained and comfortable for all 15 colleagues."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">SD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sudip Durge</p>
                    <p className="text-sm text-gray-600">Corporate Trip to Pune</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Amazing experience! Vishakha Tours & Travels helped us plan our custom Maharashtra tour. His local knowledge made
                  our trip memorable. Trustworthy and reliable service."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">DR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Durga Rage</p>
                    <p className="text-sm text-gray-600">Custom Maharashtra Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Perfect for our wedding group travel to Hyderabad. Comfortable seats, good music system, and ensured everyone reached safely. Highly satisfied!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Shridhar Jadhav</p>
                    <p className="text-sm text-gray-600">Wedding Group to Hyderabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">How is the fare calculated?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our fare is calculated based on per kilometer rate plus toll charges. We provide transparent quotes on
                  WhatsApp with no hidden charges. The rate includes driver allowance, fuel, and basic maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Can we travel at night?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we provide 24/7 service. Night travel is safe with our experienced driver. For long journeys, we
                  can arrange overnight stops as per your preference and comfort.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Is music allowed in the bus?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our bus has a good music system with USB connectivity. You can play your favorite songs and enjoy the
                  journey. We also have some popular Bollywood and regional music collections.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">What about food and refreshment stops?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We make regular stops at clean restaurants and dhabas for meals and refreshments. Being a local
                  driver, I know the best places for hygienic food along all major routes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Do you provide pickup from home?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we provide door-to-door service within Solapur city limits. For nearby areas, we can discuss
                  pickup arrangements. This is one of our key advantages over regular bus services.
                </p>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">What safety measures do you follow?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Safety is our priority. Our bus has seat belts, first aid kit, fire extinguisher, and comprehensive
                  insurance. I follow all traffic rules and maintain safe driving speeds throughout the journey.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Book Your Trip</h2>
            <p className="text-lg text-gray-600">Send us your details and get instant quote on WhatsApp</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-center text-xl text-gray-900">Quick Enquiry Form</CardTitle>
                <CardDescription className="text-center">
                  Fill this form and we'll send you a detailed quote on WhatsApp within 5 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp Number *</Label>
                    <Input id="phone" placeholder="+91 9876543210" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="from">From (Pickup Location)</Label>
                    <Input id="from" placeholder="Solapur area/landmark" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">To (Destination) *</Label>
                    <Input id="to" placeholder="e.g., Shirdi, Goa, Pune" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Travel Date *</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Number of Passengers *</Label>
                    <Input id="passengers" placeholder="e.g., 12 adults, 2 children" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea id="details" placeholder="Return date, special requirements, pickup time, etc." rows={3} />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send to WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to receive quotes and updates on WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                  <Route className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Vishakha Tours & Travels</h3>
                  <p className="text-sm text-gray-400">Bus & Car For Rental</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for comfortable and safe travel across India. Family-like service with 12+ years of
                experience.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span>+91 9657224555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-green-400" />
                  <span>+91 9657224555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>vishakhatravels1@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Address</h4>
              <div className="text-sm text-gray-400">
                <p>Vishakha Tours & Travels</p>
                <p>Sony Apartment Road, Damani Nagar</p>
                <p>Solapur, Maharashtra 413001</p>
                {/* <p className="mt-2">
                  <strong>GST:</strong> 27XXXXX1234X1XX
                  <br />
                  <strong>Tourist Permit:</strong> MH-13-XXXX
                </p> */}
              </div>
            </div>

            <div className="space-y-4">
              {/* <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div> */}
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Quick Links:</p>
                <div className="space-y-1">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Bus Gallery
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Popular Routes
                  </Link>
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Customer Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vishakha Tours & Travels - Force Traveller Rental. All rights reserved. | Designed for
              comfortable travel across India
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Keywords: Tempo Traveller Rent Solapur, Force Traveller Rental Solapur, Solapur to Shirdi Taxi, Solapur to
              Goa Bus Rental, Maharashtra Tour Bus
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=91&text=Hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full shadow-lg animate-pulse">
            <MessageCircle className="h-6 w-6 mr-2" />
            WhatsApp
          </Button>
        </a>
      </div> */}
    </div>
  )
}

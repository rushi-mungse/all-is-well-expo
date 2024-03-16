import { Slider } from "@/components/slider";
import { colors } from "@/constants";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { style as tw } from "twrnc";

import {
  Card,
  CardContent,
  CardImage,
  CardSubtitle,
  CardText,
  CardTitle,
} from "@/components/card";
import tailwind from "twrnc";

const rendarData = () => {
  return (
    <View
      style={{
        borderColor: "#ffffff50",
        borderWidth: 0.5,
        margin: 20,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          width: 250,
          borderRadius: 20,
          paddingVertical: 25,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            borderRadius: 40,
            backgroundColor: colors["light-primary"],
            height: 50,
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#ffffff50",
            borderWidth: 0.5,
          }}
        >
          <Ionicons name="fitness" size={30} color={colors.primary} />
        </View>

        <Text
          style={{
            color: "white",
            paddingVertical: 10,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Assessments
        </Text>

        <View>
          <View style={{ flexDirection: "row", paddingBottom: 5 }}>
            <Text style={{ color: "#676766", fontSize: 18 }}>{"\u2022"}</Text>
            <Text
              style={tw(
                {
                  flex: 1,
                  paddingLeft: 5,
                  fontSize: 14,
                  letterSpacing: 1,
                },
                "text-gray-400"
              )}
            >
              Conduct integrated fitness assessments (physical fitness, mental
              fitness and, nutrition)
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#676766", fontSize: 18 }}>{"\u2022"}</Text>
            <Text
              style={tw(
                {
                  flex: 1,
                  paddingLeft: 5,
                  fontSize: 14,
                  letterSpacing: 1,
                },
                "text-gray-400"
              )}
            >
              Results are calculated as a single All Is Well Fitness Score (AFS)
              to assess your overall fitness.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const rendarData1 = () => {
  return (
    <View
      style={tw(
        "rounded-md w-[250px] border border-gray-600 m-4 py-10 px-5 flex-1 items-center justify-center"
      )}
    >
      <FontAwesome6 name="kit-medical" size={30} color={colors.primary} />
      <Text style={tw("text-white mt-2 font-bold text-[20px] text-center")}>
        Reducing Pain and Injuries
      </Text>
      <Text style={tw("text-gray-400 text-center mt-4")}>
        minimize the risk of injuries and stay at the top of your game
      </Text>
    </View>
  );
};

const rendarData2 = () => {
  return (
    <View
      style={tw(
        "rounded-md bg-white w-[250px] border-b-8 border-yellow-500 m-4 py-8 px-5 flex-1 items-center justify-center"
      )}
    >
      <FontAwesome name="star" size={34} color={colors.primary} />
      <Text style={tw("mt-2 font-bold text-[25px]", { color: colors.primary })}>
        2,150 +
      </Text>
      <Text
        style={tw(
          "text-gray-800 text-center font-bold text-[22px] tracking-wider mt-4"
        )}
      >
        Athletes onboarded
      </Text>
    </View>
  );
};

const rendarData3 = () => {
  return (
    <Card style={tailwind`w-[250px] m-5`}>
      <CardContent style={tailwind`gap-1`}>
        <CardTitle
          style={{ color: colors.primary, fontSize: 20, letterSpacing: 1 }}
        >
          Vaibhav Tandon
        </CardTitle>
        <CardText>Founder and CEO</CardText>
      </CardContent>
      <CardImage source={{ uri: "https://source.unsplash.com/random" }} />
      <CardContent style={tailwind`gap-1`}>
        <CardSubtitle>Sports Ministry (TOPS)</CardSubtitle>
        <CardSubtitle>Ex-Leadership Team of OGQ</CardSubtitle>
        <CardText>IIT Roorkee</CardText>
      </CardContent>
    </Card>
  );
};

const rendarData4 = () => {
  return (
    <TouchableOpacity
      style={tw("mx-3 border border-gray-400 rounded-full p-3")}
    >
      <AntDesign name="linkedin-square" size={30} color="white" />
    </TouchableOpacity>
  );
};

const HomePage = () => {
  const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      {/* hero section  */}
      <View
        style={{
          paddingVertical: 30,
        }}
      >
        <View style={[style.container]}>
          <Text style={[style.heading]}>AI Driven Integrated</Text>
          <Text style={[style.heading, { color: colors.primary }]}>
            Fitness App
          </Text>
          <Text style={[style.subHeading, { marginTop: 10 }]}>
            to Unlock Sports Performance
          </Text>
          <View
            style={[
              style.container,
              {
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 30,
                gap: 20,
              },
            ]}
          >
            <TouchableOpacity onPress={() => {}} style={[style["btn-primary"]]}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "100",
                  letterSpacing: 1,
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={[style["btn-primary"], { backgroundColor: "white" }]}
            >
              <Text
                style={{
                  fontWeight: "100",
                  letterSpacing: 1,
                }}
              >
                Contact Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* rating section  */}
      <View
        style={{
          borderBottomColor: "#ffffff30",
          borderWidth: 0.5,
          paddingVertical: 20,
        }}
      >
        <View style={[style.container]}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 10,
            }}
          >
            - -
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            All Is Well has an overall rating of
          </Text>
          <View style={[style.container, { flexDirection: "row" }]}>
            <Entypo name="star" size={20} color={colors.primary} />
            <Entypo name="star" size={20} color={colors.primary} />
            <Entypo name="star" size={20} color={colors.primary} />
            <Entypo name="star" size={20} color={colors.primary} />
            <Entypo name="star" size={20} color="gray" />
          </View>
        </View>
      </View>

      {/* product feature*/}
      <View style={{ paddingTop: 10, minHeight: 300 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            Product Features
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={rendarData}
            horizontal={true}
          />
        </View>
      </View>

      {/* Benefits */}
      <View style={{ paddingTop: 10, minHeight: 300 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            Benefits For Players, Coaches and Academies
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={rendarData1}
            horizontal={true}
          />
        </View>
      </View>

      {/* experts  */}
      <View style={{ paddingTop: 10, minHeight: 300 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            Our Experts
          </Text>

          <Slider />
        </View>
      </View>

      {/* static section  */}
      <View style={{ paddingTop: 10, minHeight: 300 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            Statistics Section
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={rendarData2}
            horizontal={true}
          />
        </View>
      </View>

      {/* partners  */}
      <View style={{ paddingTop: 10, minHeight: 300 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            Partner Academics
          </Text>

          <Slider />
        </View>
      </View>

      {/* hand with noise  */}
      <View style={{ paddingTop: 10, minHeight: 200 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            All Is Well Join Hands with Noise
          </Text>
          <Text style={tw("text-gray-400")}>
            All Is Well is excited to announce its strategic partnership with
            India's #1 wearable brand Noise for their newly launched Luna Ring.
          </Text>
        </View>
      </View>

      {/* our team */}
      <View style={{ paddingTop: 10, minHeight: 300 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            Our Team
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={rendarData3}
            horizontal={true}
          />
        </View>
      </View>

      {/* testomonial  */}
      <View style={{ paddingTop: 10, minHeight: 300 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 26,
              paddingBottom: 10,
            }}
          >
            What Customers Say
          </Text>

          <Slider />
        </View>
      </View>

      <View style={{ padding: 10, minHeight: 300 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 26,
            paddingBottom: 20,
          }}
        >
          Contact Us
        </Text>

        <View style={tw("gap-5 pb-10")}>
          <TextInput
            placeholder="Enter Your Name"
            placeholderTextColor="#9ca3af"
            style={tw(
              "text-white border border-yellow-500 placeholder:text-white rounded-md px-4 py-1"
            )}
          />

          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="#9ca3af"
            style={tw(
              "text-white border border-yellow-500 placeholder:text-white rounded-md px-4 py-1"
            )}
          />

          <TextInput
            placeholder="Enter Your Phone Number"
            placeholderTextColor="#9ca3af"
            style={tw(
              "text-white border border-yellow-500 placeholder:text-white rounded-md px-4 py-1"
            )}
          />

          <TextInput
            placeholder="Enter Message"
            placeholderTextColor="#9ca3af"
            style={tw(
              "text-white border border-yellow-500 placeholder:text-white rounded-md px-4 py-1"
            )}
          />

          <TouchableOpacity style={[style["btn-primary"]]}>
            <Text
              style={tw("text-white text-center font-bold", {
                letterSpacing: 1,
                fontSize: 16,
              })}
            >
              Connect With Us
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 20,
            minHeight: 100,
            borderTopColor: "#ffffff50",
            borderWidth: 0.5,
          }}
        >
          <View>
            <FlatList
              data={data}
              renderItem={rendarData4}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>

          <View style={tw("mt-10")}>
            <Text style={tw("text-gray-400")}>
              Copyright © 2023 All Is Well, Meboki Technologies Pvt. Ltd
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    lineHeight: 42,
    fontSize: 32,
    color: "white",
    fontWeight: "700",
    letterSpacing: 1,
  },

  subHeading: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
    letterSpacing: 1,
  },

  "btn-primary": {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    borderColor: "transparent",
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },

  "btn-secondary": {},
});

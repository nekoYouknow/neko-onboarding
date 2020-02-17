import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function App() {
  const carouselRef = useRef(null);
  const [active, setActive] = useState(0);

  const data = [
    {
      key: 0,
      image: require("./assets/page1.png"),
      title: "Discover place near you",
      descript:
        "We make it simple to find the food you crave. Enter you address and let"
    },
    {
      key: 1,
      image: require("./assets/page2.png"),
      title: "Choose A Tasty Dish",
      descript:
        "When youorder Eat Street, we'll hook you up with exclusive coupons."
    },
    {
      key: 2,
      image: require("./assets/page3.png"),
      title: "Pick Up Or Delivery",
      descript:
        "We make food ordering fast, simple and free - no matter if you order"
    }
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemWrap}>
        <Image source={item.image} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescript}>{item.descript}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={_renderItem}
          hasParallaxImages={false}
          onSnapToItem={index => setActive(index)}
          sliderWidth={width}
          itemWidth={width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          firstItem={active}
        />

        {/* get started */}
        {active === 2 ? (
          <View style={styles.startWrap}>
            <TouchableOpacity style={styles.start}>
              <Text style={styles.startText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      {/* footer */}
      {active < 2 ? (
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Pagination
              dotsLength={3}
              activeDotIndex={active}
              dotStyle={{ backgroundColor: "#e74c3c" }}
            />
          </View>
          <View style={styles.footerRight}>
            <TouchableOpacity onPress={() => setActive(active + 1)}>
              <Text style={styles.nextText}>
                Next <Feather name="arrow-right" style={{ fontSize: 18 }} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "white"
  },

  //body
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30
  },
  itemTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 45,
    marginTop: 20
  },
  itemDescript: {
    textAlign: "center",
    fontSize: 20,
    color: "gray",
    marginTop: 20
  },

  startWrap: {
    height: 100
  },
  start: {
    backgroundColor: "#eb2f06",
    width: 200,
    borderRadius: 10
  },
  startText: {
    textAlign: "center",
    color: "white",
    paddingVertical: 14
  },

  //footer
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100
  },
  footerLeft: {
    flex: 1,
    alignItems: "flex-start"
  },
  footerRight: {
    paddingHorizontal: 30
  },
  nextText: {
    color: "#e74c3c",
    fontWeight: "bold",
    fontSize: 20
  }
});

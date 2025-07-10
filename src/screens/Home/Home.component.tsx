// HomePage.tsx (Giao diện đầy đủ theo ảnh bạn gửi - viết bằng React Native + TSX)
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Home.style";

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey Pixel Posse,</Text>
        <Image
          source={{ uri: "https://i.imgur.com/36XJdoR.png" }}
          style={styles.avatar}
        />
      </View>

      {/* My Pets */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>My Pets</Text>
        <View style={styles.petRow}>
          {["Bella", "Roudy", "Furry"].map((name, i) => (
            <View key={i} style={styles.petCard}>
              <Image
                source={{
                  uri: `https://i.imgur.com/${
                    ["Tm6KXdn", "iM9YZQa", "kX2Mnyx"][i]
                  }.png`,
                }}
                style={styles.petImage}
              />
              <Text style={styles.petName}>{name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Location & Status */}
      <View style={styles.statusRow}>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Pet Location</Text>
          <Image
            source={{ uri: "https://i.imgur.com/y44sVmA.png" }}
            style={styles.map}
          />
          <TouchableOpacity>
            <Text style={styles.statusButton}>Track Pets</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Pet Status</Text>
          {["Bella", "Roudy", "Furry"].map((pet, idx) => (
            <View key={idx} style={styles.petStatusRow}>
              <Text style={styles.petStatusText}>{pet}</Text>
              <Text style={styles.healthText}>Health: 90%</Text>
              <Text style={styles.moodText}>Mood: 85%</Text>
            </View>
          ))}
          <TouchableOpacity>
            <Text style={styles.statusButton}>Check Pets</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pet Food */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Pet Food</Text>
        {[
          {
            name: "Josera",
            desc: "Josi Dog Master Mix 900g",
          },
          {
            name: "Happy Pet",
            desc: "Happy Dog - Profi Line High Energy 30-20 600g",
          },
        ].map((item, i) => (
          <View key={i} style={styles.foodCard}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodDesc}>{item.desc}</Text>
            <Ionicons
              name="cart-outline"
              size={20}
              color="#4CAF50"
              style={{ marginLeft: "auto" }}
            />
          </View>
        ))}
      </View>

      {/* Vets */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Vets</Text>
        <View style={styles.vetCard}>
          <Image
            source={{ uri: "https://i.imgur.com/lrzIhfL.png" }}
            style={styles.vetImage}
          />
          <View style={styles.vetInfo}>
            <Text style={styles.vetName}>Dr. Nambuvan</Text>
            <Text style={styles.vetDesc}>Bachelor of veterinary science</Text>
            <Text style={styles.vetRating}>⭐ 5.0 (100 reviews)</Text>
            <Text style={styles.vetMeta}>2.5 km • 100$</Text>
            <Text style={styles.vetVisit}>Last Visit: 25/11/2022</Text>
            <TouchableOpacity>
              <Text style={styles.statusButton}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;


import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register external fonts for a premium look
// We use Open Sans for body and Merriweather for Headings as per Design System
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Merriweather",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5-fCZM.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.ttf",
      fontWeight: 700,
    },
  ],
});

// Create styles reflecting the Design System
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FAF9F6", // Ivory
    padding: 40,
    fontFamily: "Open Sans",
  },
  coverPage: {
    flexDirection: "column",
    backgroundColor: "#D53F8C", // Rose vibrante
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
  },
  coverTitle: {
    fontFamily: "Merriweather",
    fontSize: 36,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
  coverSubtitle: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.9,
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#2C7A7B", // Teal
    paddingBottom: 10,
  },
  title: {
    fontFamily: "Merriweather",
    fontSize: 24,
    color: "#2D3748",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#4A5568",
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  dayTitle: {
    fontFamily: "Merriweather",
    fontSize: 18,
    color: "#2C7A7B",
    marginBottom: 10,
    fontWeight: 700,
  },
  exerciseRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2F7",
  },
  exerciseName: {
    fontSize: 14,
    color: "#2D3748",
    fontWeight: 700,
    flex: 1,
  },
  exerciseDetails: {
    fontSize: 12,
    color: "#4A5568",
    width: 100,
    textAlign: "right",
  },
  link: {
    color: "#D53F8C",
    textDecoration: "none",
    fontSize: 12,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    color: "#A0AEC0",
    fontSize: 10,
  },
});

interface WorkoutPlanProps {
  userName?: string;
  targetWeight?: string;
  focusAreas?: string[];
}

const mockExercises = [
  {
    name: "Aquecimento: Rotação Articular",
    duration: "3 min",
    link: "https://youtube.com/shorts/aquecimento",
  },
  {
    name: "Agachamento Livre Focado",
    duration: "3x 15 repetições",
    link: "https://youtube.com/shorts/agachamento",
  },
  {
    name: "Prancha Isométrica",
    duration: "3x 30 seg",
    link: "https://youtube.com/shorts/prancha",
  },
  {
    name: "Elevação Pélvica",
    duration: "3x 15 repetições",
    link: "https://youtube.com/shorts/elevacao",
  },
  {
    name: "Alongamento / Volta à Calma",
    duration: "5 min",
    link: "https://youtube.com/shorts/alongamento",
  },
];

export const WorkoutPlanPDF: React.FC<WorkoutPlanProps> = ({
  userName = "Aluna V.I.P",
  targetWeight = "Ideal",
  focusAreas = ["Corpo Inteiro"],
}) => (
  <Document>
    {/* Capa */}
    <Page size="A4" style={styles.coverPage}>
      <Text style={styles.coverTitle}>Calistenia Sob Medida</Text>
      <Text style={styles.coverSubtitle}>
        Seu Plano Personalizado de 28 Dias
      </Text>
      <Text style={{ marginTop: 40, fontSize: 16 }}>
        Preparado especialmente para:
      </Text>
      <Text style={{ fontFamily: "Merriweather", fontSize: 28, marginTop: 10 }}>
        {userName}
      </Text>
    </Page>

    {/* Semana 1 */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Semana 1: Adaptação e Despertar</Text>
        <Text style={styles.subtitle}>
          Foco atual: {focusAreas.join(", ")} • Rumo aos {targetWeight}kg
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.dayTitle}>Dia 1: Full Body Ativação</Text>
        {mockExercises.map((ex, idx) => (
          <View key={idx} style={styles.exerciseRow}>
            <Text style={styles.exerciseName}>{ex.name}</Text>
            <Text style={styles.exerciseDetails}>{ex.duration}</Text>
          </View>
        ))}
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            fontStyle: "italic",
            color: "#4A5568",
          }}
        >
          Clique aqui para ver a execução em vídeo (Exclusivo Alunas)
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.dayTitle}>Dia 2: Foco em Core (Abdômen)</Text>
        {mockExercises.map((ex, idx) => (
          <View key={idx} style={styles.exerciseRow}>
            <Text style={styles.exerciseName}>{ex.name}</Text>
            <Text style={styles.exerciseDetails}>{ex.duration}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer} fixed>
        Calistenia Sob Medida © 2026 - Uso Exclusivo
      </Text>
    </Page>
  </Document>
);

export default WorkoutPlanPDF;

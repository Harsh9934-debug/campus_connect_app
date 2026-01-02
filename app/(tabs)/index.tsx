import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      {/* Background Image */}
      <Image
        source={require('@/assets/images/network_background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Gradient Overlay for seamless blend */}
      <LinearGradient
        colors={['transparent', '#020514']}
        style={styles.gradient}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Header - Skip Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => console.log('Skip pressed')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.contentContainer}>
          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <Text style={styles.title}>Connect & Create</Text>
          <Text style={styles.subtitle}>
            Bridge the gap between campuses. Join exclusive clubs, find project partners, and launch your ideas globally.
          </Text>

          {/* Next Button */}
          <TouchableOpacity style={styles.button} onPress={() => console.log('Next pressed')}>
            <Text style={styles.buttonText}>Next</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020514', // Deep dark navy/black
  },
  backgroundImage: {
    width: width,
    height: width * 1.2, // Visual estimation
    position: 'absolute',
    top: 0,
    opacity: 0.8,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // Adjust gradient locations to smooth out the image bottom
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  skipText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontWeight: '500',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  activeDot: {
    backgroundColor: '#2b59ff', // Bright blue
    width: 24, // Expanded dot
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#8F9BB3', // Light gray/blue text
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2b59ff', // Bright blue
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#2b59ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

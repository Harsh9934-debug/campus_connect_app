import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router, Stack, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();



  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
      headerShown: false,
    });
  }, [navigation]);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      router.push('/login'); // Navigate to Login
    }
  };

  const renderStep1 = () => (
    <>
      <Image
        source={require('@/assets/images/network_background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', '#020514']}
        style={styles.gradient}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.paginationContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <Text style={styles.title}>Connect & Create</Text>
          <Text style={styles.subtitle}>
            Bridge the gap between campuses. Join exclusive clubs, find project partners, and launch your ideas globally.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );

  const renderStep2 = () => (
    <>
      {/* Background - Reusing dark theme, maybe same image or different */}
      {/* Use a solid dark background for Step 2 as mostly covered by card, or same bg */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: '#020514' }]} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.step2Content}>
          {/* Center Card */}
          <View style={styles.cardContainer}>
            <Image
              // Placeholder for concert crowd - using a generic high quality event image from Unsplash
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNUMBaqcQy0CSIiMkbuOdqAPSkz-6c7tBCDX5wNcyhG-xfpy9ZEg0iKXMc9BOzk6Ynmplh3scdE_eVGYyAQz54A0PG8kPj-Fm2RxU5qpwvhkVeShF4rf3h5vAx9NyNqd_Oo2ICqTH9nECbHGGyxT15M3ZlmX5Za8ObGse8YzfPcZmQw37lj4hieOz_UdHndKIXTOSS-vQgfgNmN16UOKudB7CwfWDMiQUFmvbMp3zY-fdEXbnIVbzykhjheWHnrHfhsAcps3om0nEd' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.cardGradient}
            />

            {/* Floating Glass Element inside card */}
            <BlurView intensity={30} tint="dark" style={styles.glassCard}>
              <View style={styles.calendarIcon}>
                <Ionicons name="calendar" size={20} color="#fff" />
              </View>
              <View style={styles.glassTextContainer}>
                <View style={styles.glassLineLong} />
                <View style={styles.glassLineShort} />
              </View>
            </BlurView>
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.titleStep2}>Discover & Promote</Text>
            <Text style={[styles.titleStep2, styles.highlightBlue]}>Campus Events</Text>

            <Text style={styles.subtitleStep2}>
              Find the hottest campus activities or launch your own. Connect with peers across colleges effortlessly.
            </Text>
          </View>

          {/* Bottom Controls */}
          <View style={styles.bottomControls}>
            <View style={styles.paginationContainer}>
              <View style={styles.dot} />
              <View style={[styles.dot, styles.activeDot]} /> {/* Active middle dot */}
              <View style={styles.dot} />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next Step</Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );

  const renderStep3 = () => (
    <>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: '#020514' }]}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYC7MjFJ-aAkYgw6Eo4Ptn2xKho6RUjlNGvtWPYrYukzJDCGgRFS0Wip5hYa7lYWKh7YP5Jh2qxMGSu62r7zfbJC-GFgms7WZwVNzU3CPYUVIzZK8lLCl_jJyXSkFT0Jl6jdUHgMgao1oO5qiafahMaeqp2SPXMzI3MSZ6H5cNN_2vwJWLd_AZ7pozWae7_P6S5ktJe9yWRCt72Wf2fEPRmWh-1tKKbCl1dlcsCUp_nMM00WI3lSMo-wUF3sG-iv1WIcMvOgPNTbRL' }}
          style={[styles.backgroundImage, { height: height * 0.6, opacity: 0.6 }]}
          resizeMode="contain"
        />
        <LinearGradient
          colors={['transparent', '#020514']}
          style={[styles.gradient, { height: height * 0.6 }]}
        />
      </View>

      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1 }} />

        <View style={styles.step3Content}>
          <View style={styles.paginationContainer}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
          </View>

          <Text style={styles.title}>Build Your Circle</Text>
          <Text style={styles.subtitle}>
            Discover exclusive clubs, meet like-minded students, and find your next collaboration partner with ease.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Get Started</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginLink} onPress={() => router.push('/login')}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020514',
  },
  backgroundImage: {
    width: width,
    height: width * 1.2,
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
    zIndex: 10,
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
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  activeDot: {
    backgroundColor: '#2b59ff',
    width: 24,
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
    color: '#8F9BB3',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2b59ff',
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
  // Step 2 Styles
  step2Content: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  cardContainer: {
    width: '100%',
    aspectRatio: 1, // Square-ish
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  glassCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 80,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  calendarIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2b59ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  glassTextContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  glassLineLong: {
    width: '80%',
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 3,
  },
  glassLineShort: {
    width: '50%',
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 3,
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 40,
  },
  titleStep2: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  highlightBlue: {
    color: '#2b59ff',
    marginTop: 4,
  },
  subtitleStep2: {
    fontSize: 16,
    color: '#8F9BB3',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 16,
    maxWidth: '90%',
  },
  bottomControls: {
    alignItems: 'center',
    width: '100%',
    gap: 24,
  },
  // Step 3 Styles
  step3Content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  loginLink: {
    marginTop: 20,
    padding: 10,
  },
  loginText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontWeight: '500',
  },
});

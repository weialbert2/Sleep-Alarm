import type { FAQ } from "@/types";

export const homeFAQs: FAQ[] = [
  {
    question: "How does the vibrating alarm work?",
    answer:
      "The FitSleeps alarm uses a precision vibration motor inside the wristband that activates at your set time. The vibration transmits physical sensation through your wrist, activating nerve endings in your skin and sending a direct wake-up signal to your brain's sensory system — bypassing the auditory habituation that makes sound alarms easy to sleep through.",
  },
  {
    question: "Will it wake my partner?",
    answer:
      "No. The vibration is fully contained within the wristband on your wrist. It produces absolutely zero sound and can only be felt by the wearer. Thousands of couples use FitSleeps so one partner can wake early without disturbing the other.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "The standard 100% Wake-Up Alarm lasts 30+ days per charge. The Pro Version lasts 60+ days per charge. You'll receive a low-battery notification vibration pattern before the battery dies completely.",
  },
  {
    question: "What if it doesn't wake me up?",
    answer:
      "That's exactly what our 100-Night Guarantee is for. If you fail to wake up to your alarm even once in the first 100 nights, contact our support team for a full, no-questions-asked refund. We stand completely behind our product.",
  },
  {
    question: "Is it waterproof?",
    answer:
      "The standard version is splash-resistant and safe for everyday wear, but not suitable for swimming or submersion. If you need full waterproofing — for swimming, showering, or intense workouts — add the Waterproof Upgrade to your order at checkout.",
  },
  {
    question: "How do I set the alarm time?",
    answer:
      "Setting the alarm is simple: press and hold the button for 3 seconds to enter set mode. The device will vibrate to confirm. Use short presses to advance hours, then hold again to switch to minutes. Hold once more to confirm and save your alarm time. The entire process takes under 30 seconds.",
  },
  {
    question: "What is the difference between the Standard and Pro version?",
    answer:
      "The Pro Version delivers up to 2× stronger vibration intensity, has a 60+ day (vs. 30+ day) battery life, includes an extended strap for all wrist sizes, and comes with an extra backup device. It's recommended for very deep sleepers or those who want maximum reliability.",
  },
];

export const productFAQs: FAQ[] = [
  ...homeFAQs,
  {
    question: "What's in the box?",
    answer:
      "Your order includes: 1× FitSleeps Alarm wristband, 1× USB charging cable, 1× quick-start guide. The Pro Version also includes a second alarm unit as backup.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3–7 business days within the US. Express 2-day shipping is available at checkout. All orders over $50 ship free.",
  },
  {
    question: "Can I return it if I don't like it?",
    answer:
      "Absolutely. We offer a 100-night trial. If you're not satisfied for any reason within 100 nights of receiving your order, contact us for a full refund. No forms, no hassle.",
  },
];

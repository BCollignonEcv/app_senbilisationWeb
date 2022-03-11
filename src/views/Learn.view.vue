<script>

import { Section } from '@/components/layer.components'
import { Text } from '@/components/basic.components'
import { AssessmentActions } from '@/components/custom.components/assessment'

import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Keyboard, EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


export default {
    name: 'Introduction',
    components: {
      Section, Text, AssessmentActions,
      Swiper, SwiperSlide, 
    },
    setup() {
      return {
        modules: [Mousewheel, Keyboard, EffectFade, Pagination],
      };
    },
}
</script>

<template>
  <Section :height="'fullHeight'" class="customBackground">
    <Swiper
    :direction="'vertical'"
    :keyboard="true"
    :pagination="true"
    :mousewheel="{forceToAxis: true}"
    :effect="'fade'"
    :fadeEffect="{ crossFade: true }"
    :modules="modules"
    class="scrollSwiper"
  >
    <SwiperSlide>
      <div class="slide">
        <h3 class="slide-title">Introduction</h3>
        <div class="text-block-small">
            <Text :size="'small'" :padding="{bottom: true}">Since 1989, date of internet creation, users increave year after year to reach 1 billion internet users in 2005. COVID 19 has accelerated uptake and use of internet due to mobility restriction and telework.</Text>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
        <div class="container-inline">
          <div>
            <h3 class="slide-title">Today</h3>
            <Text :size="'small'" :padding="{bottom: true}">Those change implied also new vulnerabilities. As everywhere, Internet is a univers where criminality append.</Text>
            <Text :size="'small'">With COVID 19 and telework, cyberattacks increase a lot and company are increasingly vulnerable. Working at home, is a new security breach with less control.</Text>
          </div>
          <div>
            <div class="bordered-block-background">
              <div class="text-block-fact">
                <Text :size="'super'" :color="'correct'">7.77</Text>
                <Text :size="'small'">billion people on hearth</Text>
              </div>
              <div class="text-block-fact">
                <Text :size="'super'" :color="'secondary'">4.9</Text>
                <Text :size="'small'">billion Internet users (59%)</Text>
              </div>
              <div class="text-block-fact">
                <Text :size="'super'" :color="'error'">5.16</Text>
                <Text :size="'small'">billion mobile users (66%)</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
        <div class="container-inline">
          <div>
            <h3 class="slide-title">2022 might be ...</h3>
            <Text :size="'small'" :padding="{bottom: true}">You should know that the conflict between Russia and Ukraine leads to a big increase in cyberattacks in the world.</Text>
            <Text :size="'small'" :padding="{bottom: true}">Attacks allow to:</Text>
            <div class="bordered-block">
              <Text :size="'small'">Get money</Text>
            </div>
            <div class="bordered-block">
              <Text :size="'small'">Apply economic and political destabilization</Text>
            </div>
            <div class="bordered-block">
              <Text :size="'small'">Block systems</Text>
            </div>
          </div>
          <div class="bordered-block-background">
            <div class="text-block-fact">
              <Text :size="'super'" :color="'correct'">25%</Text>
              <Text :size="'small'" :padding="{bottom: true}">Every year cyberattacks increase on average by</Text>
            </div>
            <div class="text-block-fact">
              <Text :size="'super'" :color="'secondary'">300%</Text>
              <Text :size="'small'" :padding="{bottom: true}">In 2020, we observe an increase by</Text>
            </div>
            <div class="text-block-fact">
              <Text :size="'super'" :color="'error'" >800%</Text>
              <Text :size="'small'" :padding="{bottom: true}">Since the invasion of Ukraine, the increase is up to</Text>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
          <h3>Most common cyberattacks :</h3>
          <Text :size="'small'">1. Malware</Text>
          <Text :padding="{bottom: true}">
            The term “malware” encompasses various types of attacks including spyware, viruses, and worms. Malware uses a vulnerability to breach a network when a user clicks a “planted” dangerous link or email attachment, which is used to install malicious software inside the system. Malware and malicious files inside a computer system can:
            <br>
            <br>
            <ul>
              <li>Deny access to the critical components of the network</li>
              <li>Obtain information by retrieving data from the hard drive</li>
              <li>Disrupt the system or even render it inoperable</li>
            </ul>
          </Text>
          <Text :size="'small'">2. Phishing</Text>
          <Text :padding="{bottom: true}">
            Phishing attacks are extremely common and involve sending mass amounts of fraudulent emails to unsuspecting users, disguised as coming from a reliable source. The fraudulent emails often have the appearance of being legitimate, but link the recipient to a malicious file or script designed to grant attackers access to your device to control it or gather recon, install malicious scripts/files, or to extract data such as user information, financial info, and more.
          </Text>
          <Text :size="'small'">3. Man-in-the-Middle</Text>
          <Text :padding="{bottom: true}">
            Occurs when an attacker intercepts a two-party transaction, inserting themselves in the middle. From there, cyber attackers can steal and manipulate data by interrupting traffic.
            <br><br>This type of attack usually exploits security vulnerabilities in a network, such as an unsecured public WiFi, to insert themselves between a visitor’s device and the network. The problem with this kind of attack is that it is very difficult to detect, as the victim thinks the information is going to a legitimate destination. Phishing or malware attacks are often leveraged to carry out a MitM attack.
          </Text>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
          <h3>Consequences</h3>
          <Text :size="'small'">As explain earlier, internet is omnipresent ! It is the way to access to many thing like communications, bank account, (e)mail. That mean that even if you consider yourself not as a primary target or "you have nothing to hide".</Text>
          <Text :size="'medium'">YOU ARE A TARGET</Text>
          <Text :size="'small'">Getting hacked would imply serious consequences. Moreover, as internet is a network, it does not concern only yourself but also all the people you are link with.</Text>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
        <Text :size="'small'" :padding="{left: true}">Now that you know your are a target, let's understand how to protect yourself and your relationships.</Text>
        <div class="text-block-small">
          <div class="container-inline">
            <AssessmentActions :start="true"/>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  </Section>
</template>

<style lang="scss">
  .customBackground{
    background-image: url("/img/background.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .scrollSwiper{
    height: 80vh;
    .swiper-wrapper{
      .swiper-slide{
        .slide{
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
          width: 80%;
          height: 100%;
          margin: auto;

          .slide-title{
            font-weight: bold;
            margin-bottom: 1.5rem;
          }
          
          p{
            text-align: justify;
          }

          .text-inline{
            display: flex;
            align-items: center;
            margin-bottom: 2em;
          }

          .text-block-small{
            width: 50%;
          }

          .text-block-fact{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2em;

            &+.text-block-fact{
              margin-top: 3.5rem;
            }

            p{
              text-align: center;
              font-weight: 400;
            }
          }

          .bordered-block{
            @include borderContainer($color: 'secondary');
            padding: var(--m-5);
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &+.bordered-block{
              margin-top: 3.5rem;
            }

            p{
              text-align: center;
              color: var(--c-2);
              font-weight: 400;
            }
          }

          .bordered-block-background{
            @include borderContainer();
            padding: var(--m-1) 0;
            background-color: var(--c-1-10)
          }

          .container-inline{
            display: flex;
            align-items: center;
            margin-bottom: 2em;
            gap: calc(var(--m-1) * 2);

            div{
              flex: 1;
            }
          }

        }
      }
    }
  }
</style>
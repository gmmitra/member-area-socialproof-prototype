<template>
<div>
<div class="social-proof-member-wrap">
  <section class="container px-4 mx-auto text-left uppercase text-grey-darkest pt-10 ">
         <h2 class="text-center md:text-left font-normal">Browse Social Proof (5,660)</h2>
  </section>
  <!-- tabs -->
  <div class="container mx-auto px-4">
  <div class="md:flex justify-between border-b border-grey mb-8 ">
      <div class="flex md:inline-block tabs">
          <button type="button" class="flex-1 w-1/3 md:w-auto md:px-6 py-5 focus:outline-none text-grey-darker" @click="setActive('featured'); component='pp-social-proof-card'" :class="{active: isActive('featured')}">Featured</button>
          <button type="button" class="flex-1 w-1/3 md:w-auto md:px-6 py-5 focus:outline-none text-grey-darker" @click="setActive('community'); component='pp-social-proof-community'" :class="{active: isActive('community')}">Community</button>
          <button type="button" class="flex-1 w-1/3 md:w-auto md:px-6 py-5 focus:outline-none text-grey-darker" @click="setActive('mine'); component='pp-social-proof-mine'" :class="{active: isActive('mine')}">Mine</button>
      </div>
      <div class="hidden lg:inline-block italic px-6 py-5">How does a good social proof look like? <a href="#" class="no-underline text-blue">Check it out</a></div>
  </div>
  </div>
  <!-- /tabs -->
  <!-- sort -->
    <div class="container mx-auto px-4">
        <div class="text-right">
            <button type="button" class="w-full mb-4 md:mb-0 md:w-auto bg-green text-white text-sm uppercase px-4 py-2 font-bold hover:bg-green-light md:float-left add-proof-btn" @click="showModal = !showModal; uploadProofModal = true; showSuccessModal = false; showUploadProofModal = true" >Add my Proof</button>
        <div class="inline-block">
            <div class="inline-block relative w-full mb-2 md:mb-0 md:w-48">
        <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
            <option>All Countries</option>
            <option>Australia</option>
            <option>India</option>
            <option>Indonesia</option>
            <option>Malaysia</option>
            <option>Singapore</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        <div class="inline-block relative w-full mb-2 md:mb-0 md:w-48">
        <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
            <option>All Opportunities</option>
            <option>Startup</option>
            <option>Paid Surveys</option>
            <option>Education</option>
            <option>Extra Income</option>
            <option>Health &amp; Fitness</option>
            <option>Productivity</option>
            <option>Lifestyle</option>
            <option>Finance</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        <div class="inline-block relative w-full mb-2 md:mb-0 md:w-48">
        <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
            <option>Sort by</option>
            <option>Latest</option>
            <option>Name</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        </div>
        
        </div>
    </div>
    <!-- /sort -->
    <!-- modal -->
    <div class="absolute md:fixed w-full h-full md:h-screen z-50 md:flex md:items-center md:justify-center pin-t pin-l upload-proof-modal" v-if="showModal">
        <!-- upload proof -->
        <div class="p-10 relative border-b-4 border-blue upload-proof-modal-content" v-if="uploadProofModal">
            <div @click="showModal = !showModal" class="inline-block absolute pin-t pin-r mr-4 mt-4 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <g fill="none" fill-rule="evenodd" stroke="#75787d" stroke-linecap="square">
                <path d="M.5.5l14 14M.5 14.5l14-14"/>
            </g>
            </svg></div>
            <section v-if="showUploadProofModal">
                <h3 class="mb-4 text-xl text-black font-normal">Upload Social Proof</h3>
                <p class="leading-normal mb-4">Show-off what you got from joining this opportunity by uploading any proof of benefits.</p>
                <div>
                  <form class="w-full">

                <div class="relative appearance-none text-center block w-full bg-transparent text-grey text-xs border border-dashed border-grey rounded-xs py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey file-upload-wrap mb-6">
                            <label for="addimg" class="italic text-grey-dark">Browse a file not more than 2mb in jpg, png or gif format</label>
                            <input type="file" id="addimg" class="opacity-0 cursor-pointer pin absolute appearance-none block w-full">
                </div>
               
              
  <div class="md:flex md:items-center mb-6 md:mb-3">
    <div class="md:w-1/3">
      <label class="block text-grey-dark mb-1 md:mb-0 pr-4 text-xs" for="opportunity-name">
        OPPORTUNITY NAME
      </label>
    </div>
    <div class="relative md:w-2/3">
      <select v-model="selected" v-validate="'required'"  data-vv-validate-on="change" :class="{'input-error': errors.has('name')}" name="name" class="border h-8 block w-full appearance-none bg-white text-grey-darker px-4 py-2 pr-8 rounded leading-tight focus:outline-none border-grey focus:border-blue text-xs">
            <option v-for="(opportunity, index) in opportunities" :key="index" :value="opportunity">{{opportunity}}</option>
        </select>
         <div class="select-down-arrow pointer-events-none absolute pin-y pin-r flex items-center pr-3 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
        </div>
        <div v-show="errors.has('name')" class="is-danger px-3 py-2">This field is required.</div>
    </div>
  </div>
  <div class="md:flex md:items-center mb-2">
    <div class="md:w-1/3">
      <label class="block text-grey-dark mb-1 md:mb-0 pr-4 text-xs" for="benefit-received">
        BENEFIT RECEIVED
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-validate="'required'"  data-vv-validate-on="change" :class="{'input-error': errors.has('benefit')}" name="benefit" class="border h-8 block w-full appearance-none bg-white text-grey-dark px-4 py-2 pr-8 rounded leading-tight focus:outline-none border-grey focus:border-blue text-xs" id="benefit-received" type="text" placeholder="Perfect Score in Essay Writing Contest">
      <div v-show="errors.has('benefit')" class="is-danger px-3 py-2">This field is required.</div>
    </div>
  </div>
  <div class="w-full block"><small class="block italic text-grey-dark mb-6 md:mb-3 text-right">Maximum 36 characters</small></div>

<!-- if survey -->
  <div class="md:flex md:items-center mb-6 md:mb-3" >
    <div class="md:w-1/3">
      <label class="block text-grey-dark mb-1 md:mb-0 pr-4 text-xs" for="date-acquired">
        AMOUNT
      </label>
    </div>
    <div class="relative md:w-2/3">
    <div class="md:w-2/3 pr-1 inline-block">
       <input v-validate="'required'"  data-vv-validate-on="change" :class="{'input-error': errors.has('amount')}" name="amount" class="border h-8 block w-full appearance-none bg-white text-grey-darker px-4 py-2 pr-8 rounded leading-tight focus:outline-none border-grey focus:border-blue text-xs" id="date-acquired" type="text" placeholder="100">
       <div v-show="errors.has('amount')" class="is-danger px-3 py-2">This field is required.</div>
    </div>
     
      <div class="md:w-1/3 inline-block absolute pin-r">
        <select v-model="curreny" class="border h-8 block w-full appearance-none bg-white text-grey-darker px-4 py-2 pr-8 rounded leading-tight focus:outline-none border-grey focus:border-blue text-xs">
            <option value="USD">USD</option>
        </select>
      <div class="pointer-events-none absolute pin-y pin-r flex items-center pr-3 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
        </div>
    </div>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6 md:mb-3">
    <div class="md:w-1/3">
      <label class="block text-grey-dark mb-1 md:mb-0 pr-4 text-xs" for="date-acquired">
        DATE ACQUIRED
      </label>
    </div>
    <div class="relative md:w-2/3">
      <input v-validate="'required|date_format:DD/MM/YYYY'"  data-vv-validate-on="change" :class="{'input-error': errors.has('dateformat')}" name="dateformat" class="border h-8 block w-full appearance-none bg-white text-grey-dark px-4 py-2 pr-8 rounded leading-tight focus:outline-none border-grey focus:border-blue text-xs" id="date-acquired" type="text" placeholder="MM/DD/YYYY">
      <div v-show="errors.has('dateformat')" class="is-danger px-3 py-2">This field is required.</div>
    </div>
  </div>
  
<div class="md:flex md:items-center mb-6 md:mb-3 relative">
    <div class="md:w-1/3">
      <label class="md:-mt-8 block text-grey-dark mb-1 md:mb-0 pr-4 text-xs" for="comment">
        COMMENT
      </label>
    </div>
    <div class="relative md:w-2/3">
      <textarea v-validate="'required'"  data-vv-validate-on="change" :class="{'input-error': errors.has('comment')}" name="comment" rows="4" class="border block w-full appearance-none bg-white text-grey-darker px-4 py-2 pr-8 rounded leading-tight focus:outline-none border-grey focus:border-blue text-xs" id="comment" type="text" placeholder="Say something nice!"></textarea>
      <div v-show="errors.has('comment')" class="is-danger px-3 py-2">This field is required.</div>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6 md:mb-3">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
    <label class="block text-grey-dark">
      <input v-validate="'required'"  :class="{'input-error': errors.has('agree')}" name="agree" class="leading-tight inline-block align-top" type="checkbox">
    </label>
    <div class="text-xs inline-block ml-4 align-top -mt-4">
        By checking this box, you agree to allow PanelPlace publish your social proof.
      </div>
      <div v-show="errors.has('agree')" class="is-danger px-3 py-2">This is required.</div>
    </div>
  </div>
 
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3 text-right">
      <button @click="showSuccessModal = true; showUploadProofModal = false /*validateForm()*   /*uncomment to show validation */" class="w-full mb-3 md:mb-0 md:w-auto bg-green hover:bg-green-light focus:outline-none text-white py-3 px-8 submit-proof" type="button">
        <span class="hidden md:block">Submit</span><span class="block md:hidden">Submit Social Proof</span>
      </button>
    </div>
  </div>
</form>
                </div>
            </section>
        <section class="text-center" v-if="showSuccessModal">
            <div class="center-div">
            <h3 class="mb-4 text-xl text-black font-normal">New Social Proof has been added to Blinkist.</h3>
                <p class="leading-normal mb-4">Your social proof has been successfully uploaded to your account.</p>
                <button @click="showSuccessModal = false; showModal = !showModal; /*uncomment to show confirm modal showSuccessModal() */" class="w-full mb-3 md:mb-0 md:w-auto bg-green hover:bg-green-light focus:outline-none text-white py-3 px-8 submit-proof" type="button">
            <span class="block">OK</span>
            </button>
            </div>
                
        </section>

        </div>
        <!-- /upload proof -->
    </div>
    <!-- /modal -->

    <!-- <pp-social-proof-card></pp-social-proof-card> -->
    <component v-bind:is="component"></component>

  </div>
  </div>
</template>
<script>
import SocialProofCard from "../components/SocialProofCard.vue";
import SocialProofMine from "../components/SocialProofMine.vue";
import SocialProofMineCommunity from "../components/SocialProofCommunity.vue";

export default {
   
    components: {
        'pp-social-proof-card':SocialProofCard,
        'pp-social-proof-community':SocialProofMineCommunity,
        'pp-social-proof-mine':SocialProofMine,
    },
    data() {
            return {
            component:'pp-social-proof-card',
             activeItem: 'featured',
             showModal: false,
             uploadProofModal: false,selected:'',
             showSuccessModal: false,
             showUploadProofModal: false,
              currency:'',
                showModal: false,
                surveyOpportunity: false,
                comments: [
                    {
                        avatar:'cayde6/images/myphoto.jpg', commentContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, eum consequatur suscipit magni porro. Molestias reiciendis.'
                    },
                    {
                        avatar:'cayde6/images/myphoto.jpg', commentContent: 'Illum, eum consequatur suscipit magni porro. Molestias reiciendis.'
                    },
                    {
                        avatar:'cayde6/images/myphoto.jpg', commentContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, eum consequatur suscipit magni porro. Molestias reiciendis.'
                    }
                ],
               opportunities: [ 'Blink List', 'Toluna', 'YouGov']
            
            }
        },
        methods: {
            isActive: function (menuItem) {
                return this.activeItem === menuItem
            },

            setActive: function (menuItem) {
                this.activeItem = menuItem
            },
            validateForm() {
                this.$validator.validateAll();
            }
        }
}
</script>

<style lang="scss" scoped>
.social-proof {
    margin-top: 66px;
    background-position: center;
}
.proof-cta {
    button {
        border-radius: 18px;
        min-width: 260px;
    }
}
.social-proof-member-wrap {
    margin-top:50px;
    @media screen and (min-width: 992px) {
  margin-top:150px;
   }
}
.add-proof-btn {
    border-radius: 11px;
}

.tabs {
    .active {
             border-bottom: 3px solid #1d8ed0;
        }
    button {
        &:hover {
             border-bottom: 3px solid #1d8ed0;
        }
    }
}
.upload-proof-modal {
    background: rgba($color: #000000, $alpha: .50);
    
    .upload-proof-modal-content {
        background: #fff;
        max-width: 100%;
        @media screen and (min-width: 768px) {
        max-width: 500px;
        margin-top: 0px;
        }
        @media screen and (min-width: 768px) {
        max-width: 600px;
        }
    }
}

// form styles

.is-danger {
        font-size: 12px;
        font-style: italic;
        font-weight: normal;
        color: #f84438;
        background-color:rgba(255, 205, 199, 0.2);
    }

    .input-error {
        border: solid 1px #f84438 !important;
        background: rgba(255, 205, 199, 0.5);
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #f84438;
    opacity: 1; /* Firefox */
}

&:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #f84438;
}

&::-ms-input-placeholder { /* Microsoft Edge */
    color: #f84438;
}
    }
    .select-down-arrow {
        height: 32px;
    }
.submit-proof {
    border-radius: 14px;
}
.upload-proof-modal-content {
    min-height: 100vh;
    @media screen and (min-width: 768px) {
    min-height: auto;
    }
}
.center-div {
  @media screen and (max-width: 767px) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  }
}
// form styles end

</style>

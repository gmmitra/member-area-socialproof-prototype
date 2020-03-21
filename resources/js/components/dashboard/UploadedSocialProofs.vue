<template>
    <div class="bg-white w-full pp-content-box">
  <h5 class="block text-base bg-grey-lightest px-5 py-4 uppercase">Recently Uploaded Community Social Proofs</h5>
   
<table class="hidden md:flex flex-wrap flex-col items-center justify-between pp-table-social-proofs">
<tr class="flex w-full border-b border-grey-light p-5 hover:bg-grey-lighter cursor-pointer" v-for="(proof, pkey) in proofs" v-bind:key="pkey">
  <td class="w-1/4"><span class="pp-table-money">{{proof.Amount}}</span> <small class="pp-currency">{{proof.Currency}}</small></td>
  <td class="w-1/4">{{proof.Panel}}<small class="block pt-2">by {{proof.Name}}</small></td>
  <td class="w-1/4 pp-table-text">{{proof.Posted}}</td>
  <td class="w-1/4 pp-table-text">{{proof.Views}}</td>
</tr>
<tr class="flex w-full border-b border-grey-light p-5 hover:bg-grey-lighter cursor-pointer">
  <td class="w-full pp-table-text"><a href="#" class="font-bold text-left no-underline float-right px-6 inline-block">View All</a></td>
</tr>
</table>

<table class="w-full md:hidden pp-table-social-proofs mobile-table">
  <div class="overflow-y-auto ">
  <tbody class="py-3 block" v-for="(proof, pkey) in proofs" v-bind:key="pkey">
<tr class="flex content-center w-full py-5 px-2 hover:bg-grey-lighter cursor-pointer" >
  <td class="relative w-1/3 align-middle text-left pl-3"><span>Amount</span></td>
  <td class="w-2/3 pl-3"><span class="pp-table-money">{{proof.Amount}}</span> <small class="pp-currency">{{proof.Currency}}</small></td>
</tr>
<tr class="flex content-center w-full block py-5 px-2 hover:bg-grey-lighter cursor-pointer">
  <td class="flex-1 w-1/3 align-middle text-left pl-3">Survey Panel</td>
  <td class="flex-1 w-2/3 pl-3">{{proof.Panel}}<small class="block pt-2">by {{proof.Name}}</small></td>
</tr>
<tr class="flex w-full block py-5 px-2 hover:bg-grey-lighter cursor-pointer">
  <td class="w-1/3 align-middle text-left pl-3">Posted</td>
  <td class="w-2/3 align-middle pl-3">{{proof.Posted}}</td>
</tr>
<tr class="flex w-full block py-5 px-2 hover:bg-grey-lighter cursor-pointer">
  <td class="w-1/3 pp-table-text align-middle text-left pl-3">Views</td>
  <td class="w-2/3 pp-table-text align-middle pl-3">{{proof.Views}}</td>
</tr>
  </tbody>
  <tbody class="w-full block">
    <tr class="flex w-full block py-5 px-2 hover:bg-grey-lighter cursor-pointer">
  <td class="w-full pp-table-text"><a href="#" class="block font-bold text-left no-underline px-6 text-center">View All</a></td>
</tr>
  </tbody>
  </div>
</table>

 </div>
</template>


<script>
  export default {
        data() {
            return {
               proofs: [
                {Amount: '250.00', Currency: 'PHP', Panel: 'Toluna (Philippines)', Name: 'Marie Jade', Posted: '1 week ago', Views: '13 views'},
                {Amount: '250.00', Currency: 'PHP', Panel: 'Toluna (Philippines)', Name: 'Marie Jade', Posted: '1 week ago', Views: '13 views'},
                {Amount: '250.00', Currency: 'PHP', Panel: 'Toluna (Philippines)', Name: 'Marie Jade', Posted: '1 week ago', Views: '13 views'},
                {Amount: '250.00', Currency: 'PHP', Panel: 'Toluna (Philippines)', Name: 'Marie Jade', Posted: '1 week ago', Views: '13 views'},
                {Amount: '250.00', Currency: 'PHP', Panel: 'Toluna (Philippines)', Name: 'Marie Jade', Posted: '1 week ago', Views: '13 views'},
                       
                  ]
                  }
        }
    }
</script>
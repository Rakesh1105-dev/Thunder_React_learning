porps ka mtlb hota hai parameter yeh argument
now a days we are not using the bable but we are using the bundlera called->vite,webpack,parcel..
->npx vite build se hum production ready code bana skte hai
->toh iss package ne ek dist name ka folder bana diya hai jisko hum production level code bolenege and
production me isso file ko bejeneg kyuki iska size bhi kam hai

->Hamre pass two type ki dependecies hoti hai 
1) norml dependencies and 2 one is devdependencies
->devdependencies is mtlb hai ki jo file bas mujhe code likhte  waqt chahiye mtlb devlopment ke waqt chaiye jaise vite me nahi chahyta hoon ki vite ka code ko me production ke waqt dalu.
->isiliye hum devDependecies ko sepeate rakhte hai normal dependecies se.
-

->but hum na react se frontend banane ke time pe yeh sare packages ko ek ek karke install nahi kart ahai instend hum use karte hai npm create vite@latest issi ek command se react,reactdom and baki jitne packages hai woh sari kuch install ho jayegi

->react me hum directly dom manupulation nhai karte hai agar mujhe dom pe kam karna hai toh hum react ko batate hai and react->reactdom apne aaphi manupulation karta hai

-> par me react ko kaise batauga ki jaha jaha count use ho raha hai waha waha khud count ka value inc karde?? simple ans hai ki api call se mujhe jab bhi kabhi aisi condition ayyegi toh me ek api call mar dunga react ko or me bol skta hoon ek fucntion call mar dunga 

->aur yehi functional call ki functionality lake deta hai react Hook's ke form me jo ki hai 1)Usestate
isiliye hum import karte hai usestate from react se

->ek hota hai par parse react me.

->ab man lo muujhe react ke ander api call karni hai toh kaise karunga??

->ek baat dhyaan rakhna ki jsx ke ander hum object ko return nahi karwa skte hai
-->use effect hook bolta hai ki me sirf ek hi bar run hota hoon

->github users free api:-
https://api.github.com/users

->setTime function ko rerender karta hai yeha pe app function hai toh yeh function App ko rerender karega

->ab ek hota hai react.memo and useMemo

->stateFunction me two tarike se leta hoon yeh toh me direct value bej du yeh toh me ek callback function bej du jiske parameter me same value hoga jo value state varible ke ander hai


->window.location.pathname
->React ek single page applicatio hota hai
->isme dikkat yeh ho rahi thi ki page bar bar refresh ho raha tha bar bar components rerender kar raha tha jisse purana data remove ho rha hai refresh karne se prane wale data ko memory se delete kar diya gaya
->me anchor tag ka use isiliye use nahi kar pa raha tha kyuki jab me ek page se dusre page pe ja raha tha toh pehle page pe jo data rakha huaa tha woh dusre page me jate hi page refresh ho raha tha aur data gayab ho raha tha
->toh me chahta hoon ki mera page refresh nah ho jab bhi me kisi button pe click karu javascript yeh functionality deta hai woh hai window.history.pushState

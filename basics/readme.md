state lifting: yeh hota hai ki jab merko ek varible ko multiple jagah par use karna hai basically "common Ansestets doonda jata hai"
->but isme ek problem yeh hai ki jo components us count varible ko use bhi nahi kar rahahai woh bas rakha hai taki dusre componets ko de paye jab count=count+1 ho raha hai toh woh sare components faltu me rerender ho rahe hai 
->toh muhhe ke aisa solution chahiye hoga jissse ki jo components count ko use nahi kar ahe hai woh rerender nah ho jaise hi ansester wale compnents me count+1 ho jaye waise hi direct jo components count ko use kar raha hai wahi sirf render ho baki aur koi nahi
->toh me count variable ko global varible bana dunga
or
->dusra soltion yeh hai ki har ek fucntion ek object hi hai aur ek object dusre object ki proerty ko read kar skta hai toh ussi property ka use karenge.
->mtlb yeh hai ki child wala components apne parent yeh grandparent components ki property ko read kar skta hai
toh iske liye hu use karenge " useContexthook" ka
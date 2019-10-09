# Come2Gether

## Præsentation af system
Vi forestiller os at lave et administrativt system, kaldet Come2Gether. Formålet for Come2Gether er at formidle sociale aktiviteter for ubekendte mennesker i forskellige byer, med det formål at skabe nye sociale relationer. Dette vil især være relevant for mennesker, som netop er flyttet et nyt sted hen, og skal til at etablere sig en ny omgangskreds. Det kan også være interessant for nuværende beboere der ønsker at udvide deres omgangskreds, med diverse arrangementer og aktiviteter. 

For at bruge systemet, skal man enten oprette en joinUser eller hostUser. Som joinUser vil man have mulighed for at deltage i events, som er lokalitets-, aktivitets- og tidsbestemte. Som hostUser vil man have mulighed for at oprette førnævnte events. Vi forestiller os, at et event i Come2Gether systemet kunne se således ud:  

> *København: Mad: fællesspisning fredag d. 13/9 kl. 19:00. 4 tilmeldte 12 pladser tilbage*

I systemet vil det være muligt at inddele de forskellige events i interesser såsom sport, mad, kultur mm., med yderligere beskrivelser. Derved kan joinUsers browse gennem de forskellige events efter interesser og lokation.      

## Kravspecifikation
### Aktører:
- joinUser
- hostUser
- event

### Kravspecifikationer inddelt efter aktører:
joinUser:
- Skal kunne oprette sig som bruger.
- Skal kunne opgive placering.
- Skal kunne logge på og se oversigt over alle events der er oprettet i en given radius.
- Skal kunne tilføje interesser og filtrere begivenheder derefter.
- Skal kunne tilmelde sig event.
- Skal kunne framelde sig event .
- Skal kunne se tidligere tilmeldte events.
- Skal kunne slette sin bruger.

hostUser:
- Skal kunne oprette sig som bruger.
- Skal kunne opgive placering.
- Skal logge ind og se organiserede events (både forrige og fremtidige).
- Skal kunne tilføje events og kategorisere dem i interesser.
- Skal kunne ændre i egne events.
- Skal kunne slette egne events.
- Skal kunne slette sin bruger.

event:
- Skal kunne se hostUser.
- Skal kunne se joinUser(s).
- Skal kunne beregne kapacitet.


### Klassediagram
![](Images/classdiagram.png)

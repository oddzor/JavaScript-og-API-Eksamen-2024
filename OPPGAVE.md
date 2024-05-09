## FEU23-JAVASCRIPT Eksamen 2024

For denne eksamen skal du sette sammen alt du har lært i kurset til å utvikle en web side.
Temaet til denne siden står du fritt til å velge selv, men kriteriene under skal fremheves i
koden din. Til slutt skal dere lage en video presentasjon hvor du beskriver hvordan du har
implementert løsningen for kriteriene under. Det legges ikke vekt på estetikk i resultatet men
det legges vekt på funksjonalitet og manipulerings evne i html og css via javascript.


### Oppgave 1
Web siden skal inneholde minimum en side hvor du presenterer en liste med temaet du har
valgt. Ved å velge en av elementene på denne siden skal brukeren tas til en annen side hvor du
viser detaljer om det spesifikke elementet som er valgt, samt muligheten til å velge å lagre
dette elementet til en personlig liste som pierssisterers. På den tredje siden skal dere liste alle
de persisterte elementene, denne listen skal kunne manipuleres.


Det vil bli lagt vekt på:

• Autentisering av bruker for å kunne håndtere bruker spesifikt data.

• Fremvisning, filtrering/sortering av objekter fra API

• Lagre data til persistent backend lagring (hint: bruk backend tjenester som 
https://crudapi.co.uk/ eller bygg din egen backend med local SqlLite)

• Lagre session data i localStorage

• Sletting fra persistent lagring skal også slettes fra localStorage

• Redigering og oppdatering av objekter som skal lagres i localStorage eller/og persistent
lagring hensiktsmessig.


#### Eksempel - Fotball manager
• Side 1 - La brukeren opprette et eget fotball lag, denne siden skal brukeren populere med 11 spillere
som kan velges fra side 2, her kan du også vis lag data basert på spillerene som er valgt.
• Side 2 - Lister alle fotballspillere fra https://rapidapi.com/api-sports/api/api-football/ som kan filtreres
på karakteristikk og på tvers av lag
• Side 3 - Vis detaljert informasjon om en valgt spiller fra side 2


### Oppgave 2
Lag en presentasjon på maks 15 minutter hvor du presenterer
• temaet du har valgt
• resultatet du har laget, fremhev gjerne det du er stolt over
• reflekter over hva du synes var utfordrende og hvordan du kunne tenkt deg å løse de
utfordringene.
Innlevering
Slutt resultatet skal zippes og levers i wiseflow. Husk å inkludere .git mappen så commit
loggen er inkludert.
OBS! Det er bare default branch som blir vurdert, derfor må du huske på å merge branchene
dine til default branch før innlevering. Du stå fritt til å velge merge strategi som passer for deg
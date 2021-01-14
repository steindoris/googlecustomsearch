Minnispunktar:

- nota create-react-app til að setja upp grindina, þ.e. allt umhverfið

- prenta út myndina sem kom með, og krota utan um hvaða componenta ég er að sjá fyrir mér á síðunni.

- taka mynd af skissunni og setja útskýringar á hvað ég er að pæla

- ekki skila bara kóða heldur útskýringu á hvernig ég nálgaðist verkefnið

---

Ég hef verið að taka Udemy online kúrsa þar sem notast er við m.a. react/redux og þannig vann ég verkefnið

Ég byrjaði á að búa til react app með create-react-app, setti svo upp Redux boilerplate og bjó til constant-a osfv, allt á svipaðan hátt og ég hef gert undanfarið í kúrsunum.

Þaðan bjó ég til DisplayContent-component sem setur leitar-action af stað með hjálp dispatch. Leitar-action sendir svo leitarniðurstöðurnar til reducer sem fyllir leitarniðurstöðu-fylki af gögnum úr leitinni, og þá má sjá leitarniðurstöðu-fylki fullt inni í redux dev-tools.

Þegar þetta var komið var hægt að sækja fullt array-ið gegnum state-ið með useSelector inni í DisplayContent component-num, sem var mjög gaman.

Síðan gerði ég annan Result-component sem byggður er að miklu leiti í kringum react-bootstrap Card. Display component sendir hverja leitarniðurstöðu inn í þennan component og raðar niðurstöðunum svo á skjáinn.

Næst gerði ég nýjan Search-component sem tekur inn leitarorð gegnum input og sendir yfir í Display component ef smellt er á input-ið. ATH það þarf að smella á leitarkassann til að senda leit af stað :)

Google custom search:

SearchComponent:
tekur inn parameter(leitarorð) og sendir í DisplayComponent þegar smellt er á leitargluggann.

DisplayComponent:
dispatch-ar action sem sendir API query(Axios) með leitarorðinu frá Search, hleður niðurstöðum í items array í reducer.
Sækir svo items array frá state og dritar niðurstöðunum í röð yfir skjáinn með hjálp map(og Col og Row). Fyrir neðan hverja mynd kemur title og displaylink.

ResultComponent:
tekur við hverri leitarniðurstöðu og birtir mynd, slóð og hvaðan slóðin er fengin.

Loader og Message eru componentar sem ég átti til.

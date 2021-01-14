Minnispunktar:

- nota create-react-app til að setja upp grindina, þ.e. allt umhverfið

- prenta út myndina sem kom með, og krota utan um hvaða componenta ég er að sjá fyrir mér á síðunni.

- taka mynd af skissunni og setja útskýringar á hvað ég er að pæla

- ekki skila bara kóða heldur útskýringu á hvernig ég nálgaðist verkefnið

---

ég hef verið að taka Udemy kúrsa þar sem notast er við react/redux og þannig vann ég verkefnið

Ég byrjaði á að búa til react app og setti svo upp Redux boilerplate, bjó til constanta osfv, á svipaðan hátt og ég hef gert undanfarið í kúrsunum.

Þaðan bjó ég til DisplayContent component sem setur action-ina af stað með dispatch-ar og fyllir í leitarniðurstaða-fylkið í reducer-num, og þá er hægt að sjá fullt fylki inn í redux dev-tools.

Þegar þetta var komið var hægt að sækja fullt array-ið gegnum state-ið með useSelector inni í DisplayContent component-num, sem var mjög gaman.

Síðan gerði ég annan component sem byggður er að miklu leiti í kringum react-bootstrap Card, en þessi component tekur inn hverja leitarniðurstöðu fyrir sig og birtir. Það var svo í Display component-num sem virknin sem dreifir leitarniðurstöðunum lenti.

Næst gerði ég nýjan component sem tekur inn leitarorð gegnum input og sendir yfir í Display component-inn ef smellt er á input-ið.

Google custom search:

SearchComponent:
tekur inn parameter(leitarorð) og sendir í DisplayComponent þegar smellt er á leitargluggann.

DisplayComponent:
dispatch-ar action sem sendir API query(Axios) með leitarorðinu frá Search, hleður niðurstöðum í items array í reducer.
Sækir svo items array frá state og dritar niðurstöðunum í röð yfir skjáinn með hjálp map(og Col og Row). Fyrir neðan hverja mynd kemur title og displaylink.

ResultComponent:
tekur við hverri leitarniðurstöðu og birtir mynd, slóð og hvaðan slóðin er fengin.

Loader og Message eru componentar sem ég átti til.

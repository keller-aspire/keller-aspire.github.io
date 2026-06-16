import featured1 from '../assets/images/mingfeng_paper_fig.jpg';

export interface Author {
    name: string;
    //institution?: string;
}

export interface FeaturedPublication {
    type: 'featured';
    headline: string;
    description: string;
    authors: Author[];
    link: {
        text: string;
        url: string;
    };
    image: {
        src: string | any;
        alt: string;
    };
    year?: number;
}

export interface SimpleCitation {
    type: 'citation';
    citation: string;
    link?: {
        text: string;
        url: string;
    };
    year?: number;
}

export type Publication = FeaturedPublication | SimpleCitation;

export interface PublicationCategory {
    name: 'Featured' | 'Original Research' | 'Review Articles' | 'Case Reports' | 'Book Chapters, Monographs' | 'Guidelines/Protocols, Consensus Statement, Expert Opinion, Consortium Articles';
    publications: Publication[];
}

export const publications: PublicationCategory[] = [
    {
        name: 'Featured',
        publications: [
            {
                type: 'featured',
                headline: 'Exploring the Association Between Early PaCO2 Correction Speed and Cerebrovascular Autoregulation in a Porcine Model of Extracorporeal Resuscitation',
                description: 'In this experimental ECPR model, faster early PaCO2 correction was associated with impaired CVAR (higher PRx values). Controlled CO2 correction should be considered a key neuroprotective strategy during ECMO initiation.',
                authors: [
                    { name: 'Mingfeng Cao'},
                    { name: 'Et al.'},
                ],
                link: {
                    text: 'https://doi.org/10.1007/s12975-025-01376-8',
                    url: 'https://doi.org/10.1007/s12975-025-01376-8',
                },
                image: {
                    src: featured1,
                    alt: 'Neuronal Injury Areas',
                },
                year: 2024,
            },
        ],
    },
    {
        name: 'Original Research',
        publications: [
            {
                type: 'citation',
                citation: 'Keller SP, Sandrock AW, Gozani SN. Non-invasive detection of fibrillation potentials in skeletal muscle. IEEE Trans Biomed Eng. 2002 Aug; 49(8): 788-95. Pubmed PMID:',
                link: {
                    text: '12148817.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/12148817/',
                },
                year: 2002,
            },
            {
                type: 'citation',
                citation: 'Courtwright AM, Burkett P, Divo M, Keller S, Rosas IO, Trindade A, Mody GN, Singh SK, El-Chelmaly S, Camp PC, Goldberg HJ, Mallidi HR. Posttransplant lymphoproliferative disorders in Epstein-Barr virus donor positive/recipient negative lung transplant recipients. Ann Thorac Surg. 2018 Feb; 105(2): 441-447. Pubmed PMID:',
                link: {
                    text: '29223419.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/29223419/',
                },
                year: 2018,
            },
            {
                type: 'citation',
                citation: 'Chang BY, Keller SP, Bhavsar SS, Josephy N, Edelman ER. Mechanical circulatory support device-heart hysteretic interaction can predict left ventricular end diastolic pressure. Sci Transl Med. 2018 Feb; 10(430). Pubmed PMID:',
                link: {
                    text: '29491185.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/29491185/',
                },
                year: 2018,
            },
            {
                type: 'citation',
                citation: 'Woolley AE, Singh SK, Goldberg HJ, Mallidi HR, Givertz MM, Mehra MR, Coppolino A, Kusztos AE, Johnson ME, Chen K, Haddad EA, Fanikos J, Harrington DP, Camp PC, and Baden LR. DONATE HCV Trial Team. Heart and lung transplants from HCV-infected donors to uninfected recipients. N Engl J Med 2019 Apr 25; 380(17):1606-1617. Pubmed PMID:',
                link: {
                    text: '30946553.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/30946553/',
                },
                year: 2019,
            },
            {
                type: 'citation',
                citation: 'Courtwright AM, Lamattina AM, Louis PH, Trindade AJ, Burkett P, Imani J, Shrestha S, Divo M, Keller S, Rosas IO, Goldberg HJ, El Chemaly. Hyaluronan and LYVE-1 and allograft function in lung transplantation recipients. Sci Rep. 2019 June 21; 9(1):9003. PubMed PMID:',
                link: {
                    text: '31227795.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/31227795/',
                },
                year: 2019,
            },
            {
                type: 'citation',
                citation: 'Chang BY+, Keller SP+, Edelman ER. Leveraging device-arterial coupling to determine cardiac and vascular state. IEEE Trans Biomed Eng. 2019 October; 66(10): 2800-2808. Pubmed PMID:',
                link: {
                    text: '30703007.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/30703007/',
                },
                year: 2019,
            },
            {
                type: 'citation',
                citation: 'Cooper AJ, Keller S, Chan C, Glotzbecker BE, Klompas M, Baron RM, Rhee C. Improvement in sepsis-associated mortality in hospitalized patients with cancer versus those without cancer. A 12-year analysis using clinical data. Ann Am Thorac Soc. 2020 Apr;17(4):466-473. PMID:',
                link: {
                    text: '31800299.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/31800299/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Chang BY, Keller SP. Dual carbon dioxide capture to achieve extracorporeal CO2 removal. Ann Biomed Eng. 2020 May;48(5):1562-1572. PMID:',
                link: {
                    text: '32072384.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32072384/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Piechura LM, Coppolino A, Mody GN, Rinewalt DE, Keshk M, Ogawa M, Seethala R, Bohula EA, Morrow DA, Singh SK, Mallidi HR+, Keller SP+. Left ventricle unloading strategies in ECMO: a single center experience. J Card Surg. 2020 Jun 2. doi: 10.1111/jocs.14644. PMID:',
                link: {
                    text: '32485030.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32485030/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Nezami FR, Khodaee F, Edelman ER, Keller SP. A computational fluid dynamics study of the extracorporeal membrane oxygenation-failing heart circulation. ASAIO J. Published online 2020 Jul 27. PMID:',
                link: {
                    text: '32909976.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32909976/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Chang BY, Moyer C, El-Katerji A, Keller SP+, Edelman ER+. A scalable approach to determine left ventricular end diastolic pressure from mechanical circulatory support hysteretic device-heart interactions. IEEE Trans Biomed Eng. Published online 2020 Aug 12 PMID:',
                link: {
                    text: '32784129.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32784129/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Keller SP, Chang BY, Tan Q, Zhang Z, El-Katerji A, Edelman ER. Dynamic modulation of device-arterial coupling to determine cardiac output and vascular resistance. Ann Biomed Eng. 2020 Sep;48(9):2333-2342. PMID:',
                link: {
                    text: '32285344.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32285344/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Chang BY, Zhang Z, Feng K, Josephy N, Keller SP+, Edelman ER+. Hysteretic device characteristics indicate cardiac contractile state for guiding mechanical circulatory support device use. Intensive Care Medicine Exp. 2021 Dec 20; 9(1): 62. PMID:',
                link: {
                    text: '34928472.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/34928472/',
                },
                year: 2021,
            },
            {
                type: 'citation',
                citation: 'Nezami FR, Ramezanpour M, Khodaee F, Goffer E, Edelman ER, Keller SP. Simulation of fluid-structure interaction in extracorporeal membrane oxygenation circulatory support systems. J Cardiovasc Transl Res. 2022 Apr; 15(2): 249-257. PMID:',
                link: {
                    text: '34128180.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/34128180/',
                },
                year: 2022,
            },
            {
                type: 'citation',
                citation: 'Khodaee F, Nezami FR, Zampell BA, Galper E, Edelman ER, Keller SP. Effect of anatomical variation on extracorporeal membrane oxygenation circulatory support: A computational study. Comput Biol Med. 2022 Feb; 141:105178. PMID:',
                link: {
                    text: '34995875.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/34995875/',
                },
                year: 2022,
            },
            {
                type: 'citation',
                citation: 'Cho SM, Wilcox C, Keller S, Acton M, Rando H, Etchill E, Giuliano K, Bush E, Sair H, Pitts J, Kim BS, Whitman G. Assessing the Safety and Feasibility of bedside portable low-field brain Magnetic Resonance Imaging in patients on ECMO (SAFE-MRI ECMO study): study protocol and first case series experience. 2022 Apr 30; 26(1):199. DOI:',
                link: {
                    text: '10.1186/s13054-022-03990-6. PMID: 35501837.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/35501837/',
                },
                year: 2022,
            },
            {
                type: 'citation',
                citation: 'Wilcox C, Acton M, Rando H, Keller S, Sair HI, Chinedozi I, Pitts J, Kim BS, Whitman G, Cho SM. Safety of Bedside Portable Low-Field Brain MRI in ECMO Patients Supported on Intra-Aortic Balloon Pump. Diagnostics (Basel). 2022 Nov 19;12(11). doi: 10.3390/diagnostics12112871. PubMed PMID:',
                link: {
                    text: '36428931.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/36428931/',
                },
                year: 2022,
            },
            {
                type: 'citation',
                citation: 'Cho SM, Wilcox C, Keller S, Acton M, Rando H, Etchill E, Giuliano K, Bush EL, Sair HI, Pitts J, Kim BS, Whitman G. Assessing the SAfety and FEasibility of bedside portable low-field brain Magnetic Resonance Imaging in patients on ECMO (SAFE-MRI ECMO study): study protocol and first case series experience. Crit Care. 2022 Apr 30;26(1):119. doi: 10.1186/s13054-022-03990-6. PubMed PMID:',
                link: {
                    text: '35501837.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/35501837/',
                },
                year: 2022,
            },
            {
                type: 'citation',
                citation: 'Shou BL, Wilcox C, Florissi I, Kalra A, Caturegli G, Zhang LQ, Bush E, Kim B, Keller SP, Whitman GJR, Cho SM. Early Low Pulse Pressure in VA-ECMO Is Associated with Acute Brain Injury. Neurocrit Care. 2022 Sep 27;. doi: 10.1007/s12028-022-01607-y. [Epub ahead of print] PubMed PMID:',
                link: {
                    text: '36167950.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/36167950/',
                },
                year: 2022,
            },
            {
                type: 'citation',
                citation: 'Prokupets R, Kannapadi N, Chang H, Caturegli G, Bush EL, Kim BS, Keller S, Geocadin RG, Whitman GJR, Cho SM. Management of Anticoagulation Therapy in ECMO-Associated Ischemic Stroke and Intracranial Hemorrhage. Innovations (Phila). 2023 Jan-Feb;18(1):49-57. doi: 10.1177/15569845221141702. Epub 2023 Jan 11. PubMed PMID:',
                link: {
                    text: '36628944.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/36628944/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Rando HJ, Fassbinder M, Velez AK, Etchill EW, Holmes SD, Whitman G, Cho SM, Keller S, Kim BS. Rising Mortality in Coronavirus-19 Patients Supported With Extracorporeal Membrane Oxygenation. ASAIO J. 2023 Mar 1;69(3):254-259. doi: 10.1097/MAT.0000000000001837. Epub 2022 Feb 23. PubMed PMID:',
                link: {
                    text: '36847807.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/36847807/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Shou BL, Ong CS, Premraj L, Brown P, Tonna JE, Dalton HJ, Kim BS, Keller SP, Whitman GJR, Cho SM. Arterial oxygen and carbon dioxide tension and acute brain injury in extracorporeal cardiopulmonary resuscitation patients: Analysis of the extracorporeal life support organization registry. J Heart Lung Transplant. 2023 Apr;42(4):503-511. doi: 10.1016/j.healun.2022.10.019. Epub 2022 Nov 5. PubMed PMID:',
                link: {
                    text: '36435686.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/36435686/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Caturegli G, Zhang LQ, Mayasi Y, Gusdon AM, Ergin B, Ponomarev V, Kim BS, Keller S, Geocadin RG, Whitman GJR, Cho SM, Ziai W. Characterization of Cerebral Hemodynamics with TCD in Patients Undergoing VA-ECMO and VV-ECMO: a Prospective Observational Study. Neurocrit Care. 2023 Apr;38(2):407-413. doi: 10.1007/s12028-022-01653-6. Epub 2022 Dec 13. PubMed PMID:',
                link: {
                    text: '36510107.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/36510107/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Shou BL, Wilcox C, Florissi I, Krishnan A, Kim BS, Keller SP, Whitman GJR, Uchino K, Bush EL, Cho SM. National Trends, Risk Factors, and Outcomes of Acute In-hospital Stroke After Lung Transplantation in the United States: Analysis of the United Network for Organ Sharing Registry. Chest. 2023 Apr 11;. doi: 10.1016/j.chest.2023.04.007. [Epub ahead of print] PubMed PMID:',
                link: {
                    text: '37054775.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/37054775/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Kim BS, Keller SP, Dodd-O JM. A case series evaluating the effect of esmolol therapy to treat hypoxemia in COVID-19 patients on VV-ECMO. Int J Artif Organs. 2023 June; 46(6): 381-383. Epub 2023 May 22. Pubmed PMID:',
                link: {
                    text: '37212179.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/37212179/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Zhao D, Caturegli G, Wilcox C, Stephens RS, Kim BS, Keller S, Geocadin R, Suarez J, Whitman G, Cho SM. Challenges in Determining Death by Neurologic Criteria in Extracorporeal Membrane Oxygenation – A Single Center Experience. Perfusion. 2023 Jun 30:2676591231187548. doi:',
                link: {
                    text: '10.1177/02676591231187548.',
                    url: 'https://doi.org/10.1177/02676591231187548',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Rando HJ, Fanning JP, Cho SM, Kim BS, Whitman G, Bush EL, Keller SP. Extracorporeal Membrane Oxygenation as a Bridge to Lung Transplantation: Practice Patterns and Patient Outcomes. J Heart Lung Transplant. 2023 June 30; S1053-2498(23)01925-3. doi:',
                link: {
                    text: '10.1016/j.healun.2023.06.016. Pubmed PMID: 37394023.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/37394023/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Kook Kang J, Kalra A, Ameen Ahmad S, Kumar Menta A, Rando HJ, Chinedozi I, Darby Z, Spann M, Keller SP, Whitman G, Cho SM. A recommended preclinical extracorporeal cardiopulmonary resuscitation model for neurological outcomes: a scoping review. Resusc Plus. 2023 Jul 7; 15:100424. PMID:',
                link: {
                    text: '37719942. DOI: 10.1016/j.resplu.2023.100424.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/37719942/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Kalra A, Shou BL, Zhao D, Wilcox C, Keller SP, Whitman G, Kim BS, Cho SM. Racial and ethnical discrepancy in hypoxemia detection in patients on extracorporeal membrane oxygenation. JTCVS Open. 2023 Mar 1; 14:145-170. doi:',
                link: {
                    text: '10.1016/j.xjon.2023.02.011.',
                    url: 'https://doi.org/10.1016/j.xjon.2023.02.011',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Kalra A, Shou BL, Zhao D, Wilcox C, Keller SP, Whitman G, Kim BS, Cho SM. ECMO Physiological Factors Influence Pulse Oximetry and Arterial Oxygen Saturation Discrepancies. Annals of Thoracic Surgery. 2023 September 23. PMID:',
                link: {
                    text: '37748529. DOI: 10.1016/j.athoracsur.2023.09.019.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/37748529/',
                },
                year: 2023,
            },
            {
                type: 'citation',
                citation: 'Fisher AB, Zani B, Han T, Dodia C, Melidone R, Keller S. Decreased LPS-induced lung injury in pigs treated with a lung surfactant protein A-derived nonapeptide that inhibits peroxiredoxin 6 activity. Am J Physiol Lung Cell Mol Physiol. 2024 Feb 13. PMID:',
                link: {
                    text: '38349117. DOI: 10.1152/ajplung.00325.2023.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/38349117/',
                },
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Lambert KK, Keller SP, Edelman ER. Dynamic load modulation predicts right heart tolerance of left ventricular cardiovascular assist in a porcine model of cardiogenic shock. Sci Transl Med. 2024 Feb 14; 16(734). PMID:',
                link: {
                    text: '38354226. DOI: 10.1126/scitranslmed.adk4266.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/38354226/',
                },
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Cho SM, Khanduja S, Wilcox C, Dinh K, Kim J, Kang JK, Chinedozi ID, Darby Z, Acton M, Rando H, Briscoe J, Bush E, Sair HI, Pitts J, Arlinghaus LR, Wandji AN, Moreno E, Torres G, Akkanti B, Gavito-Higuera J, Keller S, Choi HA, Kim BS, Gusdon A, Whitman GJ. Clinical Use of Bedside Portable Low-field Brain Magnetic Resonance Imaging in Patients on ECMO: The Results from Multicenter SAFE MRI ECMO Study. Res Sq. 2024 Jan 16:rs.3.rs-3858221. doi:',
                link: {
                    text: '10.21203/rs.3.rs-3858221/v1.',
                    url: 'https://doi.org/10.21203/rs.3.rs-3858221/v1',
                },
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Shou BL, Kalra A, Zhou AL, Barbur I, McGoldrick MT, Larson E, Keller SP, Kim BS, Whitman GJR, Cho SM, Bush EL. Impact of Extracorporeal Membrane Oxygenation Bridging Duration on Lung Transplant Outcomes. Ann Thorac Surg. 2024 May 11:S0003-4975(24)00361-8. PMID:',
                link: {
                    text: '38740080. DOI: 10.1016/j.athoracsur.2024.04.021.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/38740080/',
                },
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Goffer EM, Lamberti KK, Spognardi AM, Edelman ER, Keller SP. Steady Flow Left Ventricle Unloading is Superior to Pulsatile Pressure Augmentation Venting During Venoarterial Extracorporeal Membrane Oxygenation Support. ASAIO J. 2024 Apr 8. PMID:',
                link: {
                    text: '38588597. DOI: 10.1097/MAT.0000000000002208.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/38588597/',
                },
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Lamberti KK, Edelman ER, Keller SP. Differential Effects of Pharmacologic and Mechanical Support on Right-Left Ventricular Coupling. J Cardiovasc Transl Res. 2024 May 20. PMID:',
                link: {
                    text: '38767797. DOI: 10.1007/s12265-024-10522-w.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/38767797/',
                },
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Kalra A, Wilcox C, Holmes SD, Tonna JE, Jeong IS, Rycus P, Anders MM, Zaaqoq AM, Lorusso R, Brodie D, Keller SP, Kim BS, Whitman GJR, Cho SM. Characterizing the Racial Discrepancy in Hypoxemia Detection in Venovenous Extracorporeal Membrane Oxygenation: An Extracorporeal Life Support Organization Registry Analysis. Accepted for publication in Lung on 5/27/2024.',
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Cho SM, Khanduja S, Wilcox C, Dinh K, Kim J, Kang JK, Chinedozi I, Darby Z, Acton M, Rando H, Briscoe J, Bush E, Sair H, Pitts J, Arlinghaus L, Wandji AC, Moreno E, Torres G, Akkanti B, Gavito-Higuera J, Keller S, Choi H, Kim B, Gusdon A, and Whitman G. Clinical Use of Bedside Portable Ultra-Low-field Brain Magnetic Resonance Imaging in Patients on Extracorporeal Membrane Oxygenation: The Results from Multicenter SAFE MRI ECMO Study. Circulation. 2024 Dec 10;150(24):1955-1965.',
                year: 2024,
            },
            {
                type: 'citation',
                citation: 'Kang JK, Feng SN, Liu WL, Kim J, Kalra A, Brown P, Wilcox CJ, Brodie D, Keller SP, Kim BS, Whitman GJR, Cho SM. Impact of Body Mass Index on Stroke in Extracorporeal Cardiopulmonary Resuscitation: Data from the Extracorporeal Life Support Organization Registry. J Clin Med. 2025 Mar 24; 14(7):2202. doi:',
                link: {
                    text: '10.3390/jcm14072202.',
                    url: 'https://doi.org/10.3390/jcm14072202',
                },
                year: 2025,
            },
            {
                type: 'citation',
                citation: 'Yuh-Chin Huang YC, Morris P, Owens R, Guardia C, Keller S, Belloso W, Gregory T, Weinstein L, Simmons P, Simonson S. Lucinactant, A Synthetic Surfactant For The Treatment Of Acute Respiratory Distress Syndrome Caused By Covid-19. Accepted for publication at JMIR Formative Research.',
                year: 2025,
            },
            {
                type: 'citation',
                citation: 'Lamberti KK, Edelman ER, Keller SP. Combined Mechanical Ventilatory and Mechanical Circulatory Support Aids Pulmonary Vascular State in Cardiogenic Shock. Intensive Care Med Exp. 2025 Oct 15; 13(1):100. doi:',
                link: {
                    text: '10.1186/s40635-025-00811-2.',
                    url: 'https://doi.org/10.1186/s40635-025-00811-2',
                },
                year: 2025,
            },
            {
                type: 'citation',
                citation: 'Porras T, Cao M, Briscoe J, Kang JK, Chinedozi ID, Darby Z, Khanduja S, Bezerianos A, Thakor N, Whitman G, Mukherjee D, Keller S, Cho SM. Investigating the dynamics of intracranial pressure and cerebral autoregulation during extracorporeal cardiopulmonary resuscitation using a porcine model. Resusc Plus. 2025 Jun 16:25:101003. doi:',
                link: {
                    text: '10.1016/j.resplu.2025.101003.',
                    url: 'https://doi.org/10.1016/j.resplu.2025.101003',
                },
                year: 2025,
            },
            {
                type: 'citation',
                citation: 'Cao M, Contreras-Rojas CS, Wang Q, Ahmed YB, Briscoe J, Pardo CA, Rando H, Kang JK, Whitman J, Keller S, Porras T, Cho SM. Exploring the Association Between Early PaCO2 Correction Speed and Cerebrovascular Autoregulation in a Porcine Model of Extracorporeal Resuscitation. Transl. Stroke Res. 16, 2139–2157 (2025). url:',
                link: {
                    text: 'https://doi.org/10.1007/s12975-025-01376-8.',
                    url: 'https://doi.org/10.1007/s12975-025-01376-8',
                },
                year: 2025,
            },
            {
                type: 'citation',
                citation: 'Feng SN, Liu WL, Kang JK, Kalra A, Kim J, Zapoop A, Vogelsong MA, Kim BS, Brodie D, Brown P, Whitman GJR, Keller S, Cho SM. Impact of Left Ventricular Venting on Acute Brain Injury in Patients with Cardiogenic Shock: An Extracorporeal Life Support Organization Registry Analysis. Crit Care Med. 2025 Oct 17. doi:',
                link: {
                    text: '10.1097/CCM.0000000000006897.',
                    url: 'https://doi.org/10.1097/CCM.0000000000006897',
                },
                year: 2025,
            },
            {
                type: 'citation',
                citation: 'Mansour AI, Ancha B, Alkhunaizi F, Kim YJ, Foy W, Keller S, Polanco A, Pasrija C, Kilic A, Tedford RJ, Scheel P, Hsu S. Right Ventricular-Pulmonary Arterial Coupling May Discriminate Late Right Heart Failure Outcomes in LVAD Recipients. JHLT Open. 2026.',
                year: 2026,
            },
        ],
    },
    {
        name: 'Review Articles',
        publications: [
            {
                type: 'citation',
                citation: 'Keller SP, Fessler HE. Monitoring of oesophageal pressure. Curr Opin Crit Care. 2014 Jun; 20(3): 340-6. PMID:',
                link: {
                    text: '24751808.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/24751808/',
                },
                year: 2014,
            },
            {
                type: 'citation',
                citation: 'Keller SP, Halperin HR. Cardiac arrest: the changing incidence of ventricular fibrillation. Curr Treat Options Cardiovasc Med. 2015 Jul; 17(7): 392. PMID:',
                link: {
                    text: '25981196.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/25981196/',
                },
                year: 2015,
            },
            {
                type: 'citation',
                citation: 'Keller SP. Management of peripheral venoarterial extracorporeal membrane oxygenation in cardiogenic shock. Crit Care Med. 2019 Jun 18. PubMed PMID:',
                link: {
                    text: '31219839.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/31219839/',
                },
                year: 2019,
            },
            {
                type: 'citation',
                citation: 'Keller SP. Contemporary approaches in the use of ECMO to support patients waiting for lung transplantation. Ann Cardiothorac Surg 2020; 9(1):29-41. PMID:',
                link: {
                    text: '32175237.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32175237/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Karmouty-Quitana H, Thandavarayan RA, Keller SP, Sahay S, Pandi LM, and Akkanti B. Emerging mechanisms of pulmonary vasoconstriction in SARS-CoV-2-induced acute respiratory distress syndrome (ARDS) and potential therapeutic targets. Int J Mol Sci. 2020, 21(21), 8081. PMID:',
                link: {
                    text: '33138181.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/33138181/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Keller SP, Whitman GJR, Grant MC. Temporary Mechanical Circulatory Support after Cardiac Surgery. Journal of Cardiothoracic and Vascular Anesthesia. DOI: url:',
                link: {
                    text: 'https://doi.org/10.1053/j.jvca.2024.06.014. Published online June 15, 2024.',
                    url: 'https://doi.org/10.1053/j.jvca.2024.06.014',
                },
                year: 2024,
            },
        ],
    },
    {
        name: 'Case Reports',
        publications: [
            {
                type: 'citation',
                citation: 'Rajab TK, Kim T, Keller S, Mallidi H. Management of a young patient with dextrocardia, atrial septal defect, and Eisenmenger syndrome with venous-venous extracorporeal membrane oxygenation and heart-lung transplantation. J Card Surg 2019 Jul 23. PMID:',
                link: {
                    text: '31328410.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/31328410/',
                },
                year: 2019,
            },
            {
                type: 'citation',
                citation: 'Rinewalt D, Coppolino A, Seethala R, Sharma N, Salim A, Keller S, Mallidi HR. COVID-19 patient bridged to recovery with veno-venous extracorporeal membrane oxygenation. J Card Surg. 2020 Oct; 35(10): 2869-2871. PMID:',
                link: {
                    text: '32668041.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32668041/',
                },
                year: 2020,
            },
        ],
    },
    {
        name: 'Book Chapters, Monographs',
        publications: [
            {
                type: 'citation',
                citation: 'Lopes, MS, Keller SP. Introduction: Pathophysiology and definitions. In Abraham J and Parrillo JE (ed.) Mechanical circulatory support devices in the intensive care unit: post-implant care and management. Society for Critical Care Medicine. Mount Prospect, IL. 2020.',
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Keller SP, Lopes, MS. Overview of mechanical circulatory support. In Abraham J and Parrillo JE (ed.) Mechanical circulatory support devices in the intensive care unit: post-implant care and management. Society for Critical Care Medicine. Mount Prospect, IL. 2020.',
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Keller SP. ECpella: physiological basis and clinical management of dual mechanical circulatory support with ECMO and Impella CP. In Abraham J and Parrillo JE (ed.) Mechanical circulatory support devices in the intensive care unit: post-implant care and management. Society for Critical Care Medicine. Mount Prospect, IL. 2020.',
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Keller SP. Extracorporeal ventilatory therapies. In Cohen E (ed.) Cohen\'s Comprehensive Thoracic Anesthesia. Elsevier, Inc. Philadelphia, PA. 2021.',
                year: 2021,
            },
            {
                type: 'citation',
                citation: 'Keller SP. Pulmonary Protection and Management during ECMO. In Kirali K (ed.) Cardiopulmonary Bypass: Advances in Extracorporeal Life Support. Elsevier, Inc. Philadelphia, PA. 2022.',
                year: 2022,
            },
            {
                type: 'citation',
                citation: 'Keller SP. Extracorporeal Carbon Dioxide Removal. In Mazzefi M, Kussman BD, Mazer D, and Whitson BA (ed.) Cardiopulmonary Bypass and Mechanical Support (5th Edition). Lippincott Williams & Wilkins, Inc. Philadelphia, PA. 2025.',
                year: 2025,
            },
        ],
    },
    {
        name: 'Guidelines/Protocols, Consensus Statement, Expert Opinion, Consortium Articles',
        publications: [
            {
                type: 'citation',
                citation: 'Rajagopal K, Keller SP, Akkanti B, Bime C, Loyalka P, Cheema FH, Zwischenberger JB, el-Banayosy A, Papalardo F, Slaughter MS, Slepian MJ. Advanced pulmonary and cardiac support of COVID-19 patients: emerging recommendations from ASAIO – A Living Working Document. ASAIO J. 2020 Jun;66(6):588-598. PubMed PMID:',
                link: {
                    text: '32358232.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32358232/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Rajagopal K, Keller SP, Akkanti B, Bime C, Loyalka P, Cheema FH, Zwischenberger JB, el-Banayosy A, Papalardo F, Slaugher MS, Slepian MJ. Advanced pulmonary and cardiac support of COVID-19 patients: emerging recommendations from ASAIO – A Living Working Document. Circ Heart Fail. 2020 May;13(5):e007175. Epub 2020 May 1. PMID:',
                link: {
                    text: '32358232.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32358232/',
                },
                year: 2020,
            },
            {
                type: 'citation',
                citation: 'Shekar K, Badulak J, Peek G, Boeken U, Dalton HJ, Arora L, Zakhary B, Ramanathan K, Starr J, Akkanti B, Antonini MV, Ogino MT, and Raman L. ELSO Guideline Working Group. Extracorporeal Life Support Organization COVID-19 Interim Guidelines. ASAIO J. 2020 April 29. PMID:',
                link: {
                    text: '32358232.',
                    url: 'https://pubmed.ncbi.nlm.nih.gov/32358232/',
                },
                year: 2020,
            },
        ],
    },
];

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Homepage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4368:321106 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.archaeologicalSitesPredictionM}>Archaeological sites prediction model </div>
      <div className={classes.howDoesItWorkTheArchaeological}>
        <div className={classes.textBlock}>How does it work?</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>
              The archaeological prediction model was implemented using the Deepness plugin in QGIS, with key factors
              such as distance from water bodies, elevation, microlandforms, and terrain ruggedness being considered.
              These environmental and spatial features were processed and analyzed within QGIS, forming the basis for
              training the neural network. The model was designed to recognize patterns in the landscape that correlate
              with potential archaeological sites. By utilizing the Deepness plugin, predictions were generated and
              visualized, allowing researchers to identify areas with high archaeological significance based on these
              crucial factors.
            </span>
          </p>
        </div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label2}>area of interest:</span>
          </p>
        </div>
        <div className={classes.textBlock5}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label3}>
              the area of interest chosen is The Gulf of Kutch region attracted early settlers due to its rich natural
              resources, including fertile land and abundant marine life. Its strategic location along trade routes
              facilitated economic exchanges and cultural interactions, making it an ideal site for community
              establishment.
            </span>
          </p>
        </div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper4}></p>
        </div>
        <div className={classes.textBlock7}>
          <p className={classes.labelWrapper5}></p>
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.archaeoscope}>Archaeoscope</div>
      </div>
      <div className={classes.screenshot20241061510071}></div>
      <div className={classes.screenshot20241061450491}></div>
      <div className={classes.outputOfTheModelMappingTheArea}>
        output of the model mapping the areas of high probability of archaeological sites.
      </div>
      <div className={classes.unearthingHistoryStrengthening}>
        Unearthing History, Strengthening Heritage: Exploring the Roots of Our Communities Through Archaeology
      </div>
      <div className={classes.researchAndReferencesAPredicti}>
        <div className={classes.textBlock9}>research and references:</div>
        <div className={classes.textBlock10}>
          <p className={classes.labelWrapper6}>
            <span className={classes.label4}>
              A Prediction Study on Archaeological Sites Based on Geographical Variables and Logistic Regression—A Case
              Study of the Neolithic Era and the Bronze Age of Xiangyang
            </span>
          </p>
        </div>
        <div className={classes.textBlock11}>
          <p className={classes.labelWrapper7}>
            <a
              className={classes.label5}
              href='https://www.mdpi.com/2071-1050/14/23/15675'
              target='_blank'
              rel='noreferrer'
            >
              https://www.mdpi.com/2071-1050/14/23/15675
            </a>
          </p>
        </div>
        <div className={classes.textBlock12}>
          <p className={classes.labelWrapper8}>
            <span className={classes.label6}>
              Predictive modeling for archaeological site locations: Comparing logistic regression and maximal entropy
              in north Israel and north-east China
            </span>
          </p>
        </div>
        <div className={classes.textBlock13}>
          <p className={classes.labelWrapper9}>
            <a
              className={classes.label7}
              href='https://www.sciencedirect.com/science/article/abs/pii/S0305440318300293'
              target='_blank'
              rel='noreferrer'
            >
              https://www.sciencedirect.com/science/article/abs/pii/S0305440318300293
            </a>
          </p>
        </div>
      </div>
    </div>
  );
});

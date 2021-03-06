/* tslint:disable:no-unused-expression no-unused-new ordered-imports */

import QtyIncrement from '../../../node_modules/creative-patterns/packages/components/qty-increment/src/qty-increment';
import $ from 'jquery';

/**
 * Initializes all flyouts on the page.
 */
class QtyIncrementCollection {
    public constructor() {
        $('.cs-qty-increment').each((index: number, element: any) => {
            new QtyIncrement($(element));
        });
    }
}

export { QtyIncrementCollection };

// tslint:disable:no-magic-numbers

import { Block, DictionaryOf, to } from '@musical-patterns/utilities'

const buildBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const firstBlock: Block = to.Block([ 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4 ])
        const secondBlock: Block = to.Block([ 7, 1, 6, 8, 1, 7, 3, 4, 2, 1 ])

        return {
            firstBlock,
            secondBlock,
        }
    }

export {
    buildBlocks,
}

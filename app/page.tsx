import { Block, BlockBody, BlockHeader } from "@/components/ui/block"
import { OddsTable } from "@/components/ui/oddsTable"
import { ResourceBlock } from "@/components/ui/resourceBlock"
import { Section } from "@/components/ui/section"

export default function IndexPage() {
  return (
    <Section>
      <Block>
        <BlockHeader>💰 High Roller VP</BlockHeader>
        <BlockBody>
          The first player to have a cumulative bet of 5 or more resources may
          claim this card. If a different player gets more than the current max
          bet, they may claim the card from the current holder.
        </BlockBody>
      </Block>
      <ResourceBlock resourceEmoji="🌲" resourceCount={4} />
      <ResourceBlock resourceEmoji="🧱" resourceCount={3} />
      <ResourceBlock resourceEmoji="🐑" resourceCount={4} />
      <ResourceBlock resourceEmoji="🌾" resourceCount={4} />
      <ResourceBlock resourceEmoji="🪨" resourceCount={3} />
      <Block>
        <BlockHeader>Place Bets</BlockHeader>
        <BlockBody>
          Place bets are made up of a series of numbers across the board. These
          include 4, 5, 6, 8, 9 and 10. The player can bet on these numbers as a
          single bet, and if they appear before a 7 is rolled, then the player
          wins.
        </BlockBody>
        <OddsTable
          betName="Place Bets"
          payouts={{
            "6 or 8": "6 to 5",
            "5 or 9": "3 to 2",
            "4 or 10": "2 to 1",
          }}
          odds={{
            "6 or 8": "7 to 6",
            "5 or 9": "7 to 5",
            "4 or 10": "9 to 5",
          }}
          edges={{
            "6 or 8": "1.52%",
            "5 or 9": "4.00%",
            "4 or 10": "6.67%",
          }}
        />
      </Block>

      <Block>
        <BlockHeader>Big 6 or 8</BlockHeader>
        <BlockBody>
          The Big 6 or 8 bet is the same as the 6 or 8 bet from the place bets
          above. For this, you are choosing either number to be rolled before a
          7.
        </BlockBody>
        <OddsTable
          betName="Big 6 or 8"
          payouts={{
            "6 or 8": "1 to 1",
          }}
          odds={{
            "6 or 8": "6 to 5",
          }}
          edges={{
            "6 or 8": "9.09%",
          }}
        />
      </Block>

      <Block>
        <BlockHeader>Field Bets</BlockHeader>
        <BlockBody>
          Field bets are where you bet on a number that the next roll will be.
          This includes 2, 3, 4, 9, 10, 11 or 12. Any 5, 6, 7 or 8 will mean
          that you lose the bet.
        </BlockBody>
        <OddsTable
          betName="Field Bets"
          payouts={{
            "3, 4, 9, 10, 11 or 12": "1 to 1",
            "2": "2 to 1",
          }}
          odds={{
            "2, 3, 4, 9, 10, 11 or 12": "5 to 4",
          }}
          edges={{
            "2, 3, 4, 9, 10, 11 or 12": "2.27%",
          }}
        />
      </Block>

      <Block>
        <BlockHeader>3 or 11</BlockHeader>
        <BlockBody>
          The 3 or 11 bet works in much the same way as the field bet. But it is
          limited to just the 3 or 11, which are rare numbers.
        </BlockBody>
        <OddsTable
          betName="3 or 11 Bets"
          payouts={{
            "3 or 11": "15 to 1",
          }}
          odds={{
            "3 or 11": "17 to 1",
          }}
          edges={{
            "3 or 11": "11.11%",
          }}
        />
      </Block>

      <Block>
        <BlockHeader>Hard Bets</BlockHeader>
        <BlockBody>
          Hard bets are where you bet on the two numbers rolled on the dice to
          be the same. This means that you have 2, 4, 6, 8 and 10 as the
          possible winning outcomes for this bet.
        </BlockBody>
        <BlockBody>
          You will lose if a 7 is rolled or a 5-3 or 6-2 is rolled. Your hand
          stays live with any other non-winning combination.
        </BlockBody>
        <OddsTable
          betName="Hard Bets"
          payouts={{
            "6 or 8": "9 to 1",
            "4 or 10": "7 to 1",
            "2": "30 to 1",
          }}
          odds={{
            "6 or 8": "10 to 1",
            "4 or 10": "8 to 1",
            "2": "35 to 1",
          }}
          edges={{
            "6 or 8": "9.09%",
            "4 or 10": "11.11%",
            "2": "13.89%",
          }}
        />
      </Block>
      <Block>
        <BlockHeader>Errata</BlockHeader>
        <BlockBody>
          Since the dice still are passed from player to player in Catan, there
          are no Come / Don{"'"}t Come or Pass / Don{"'"}t Pass bets.
        </BlockBody>
        <BlockBody>
          Any Craps bet where the payout occurs when a 7 is rolled is not
          allowed in Craps of Catan. This includes laying the odds and Lay Bets.
        </BlockBody>
      </Block>
    </Section>
  )
}

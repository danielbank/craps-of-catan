import { Fact } from "@/components/ui/fact"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface OddsTableProps {
  betName: string
  payouts: Record<string, string>
  odds: Record<string, string>
  edges: Record<string, string>
}

const OddsTable = ({ betName, payouts, odds, edges }: OddsTableProps) => (
  <div className="mt-2 flex w-full">
    <div className="w-1/3 px-2">
      <h3>{betName} Payout</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Roll</TableHead>
            <TableHead>Ratio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(payouts).map((payoutKey) => {
            return (
              <TableRow key={`payout-${payoutKey}`}>
                <TableCell className="font-medium">{payoutKey}</TableCell>
                <TableCell>
                  <Fact>{payouts[payoutKey]}</Fact>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
    <div className="w-1/3 px-2">
      <h3>{betName} Odds</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Roll</TableHead>
            <TableHead>Ratio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(odds).map((oddKey) => {
            return (
              <TableRow key={`odd-${oddKey}`}>
                <TableCell className="font-medium">{oddKey}</TableCell>
                <TableCell>
                  <Fact>{odds[oddKey]}</Fact>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
    <div className="w-1/3 px-2">
      <h3>{betName} House Edge</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Roll</TableHead>
            <TableHead>Ratio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(edges).map((edgeKey) => {
            return (
              <TableRow key={`edge-${edgeKey}`}>
                <TableCell className="font-medium">{edgeKey}</TableCell>
                <TableCell>
                  <Fact>{edges[edgeKey]}</Fact>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  </div>
)
export { OddsTable }

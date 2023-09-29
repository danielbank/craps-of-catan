"use client"

import { useEffect, useReducer, useState } from "react"
import { getInfo } from "@/utils/math"
import { AlertCircle, Pencil } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Block, BlockBody, BlockHeader } from "@/components/ui/block"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OddsTable } from "@/components/ui/oddsTable"

export interface ResourceProps {
  resourceEmoji: string
  resourceCount: number
}

export interface ResourceInternalProps extends ResourceProps {
  resourceTiles: number[]
  toggleIsEditing: () => void
}

export interface ResourceFormProps extends ResourceInternalProps {
  setResourceTiles: (resourceTiles: number[]) => void
}

export interface ResourceFormInputProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export interface EditButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

const getResourceTileString = (resourceTiles: number[]) => {
  const uniqueResourceTiles = [...new Set(resourceTiles)]

  if (uniqueResourceTiles.length === 0) {
    return ""
  } else if (uniqueResourceTiles.length === 1) {
    return uniqueResourceTiles[0].toString()
  } else {
    const lastResourceTile = uniqueResourceTiles[uniqueResourceTiles.length - 1]
    const joinedResourceTiles = uniqueResourceTiles.slice(0, -1).join(", ")
    return `${joinedResourceTiles} or ${lastResourceTile}`
  }
}

const ResourceBlock = ({ resourceEmoji, resourceCount }: ResourceProps) => {
  const [isEditing, toggleIsEditing] = useReducer((state) => {
    return !state
  }, true)
  const [resourceTiles, setResourceTiles] = useState<number[]>([])

  useEffect(() => {
    setResourceTiles(new Array(resourceCount).fill(0))
  }, [])

  return (
    <Block>
      <BlockHeader>{resourceEmoji} Bets</BlockHeader>
      {isEditing ? (
        <ResourceForm
          resourceEmoji={resourceEmoji}
          resourceCount={resourceCount}
          resourceTiles={resourceTiles}
          setResourceTiles={setResourceTiles}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <ResourceDisplay
          resourceEmoji={resourceEmoji}
          resourceCount={resourceCount}
          resourceTiles={resourceTiles}
          toggleIsEditing={toggleIsEditing}
        />
      )}
    </Block>
  )
}

const EditButton = (props: EditButtonProps) => {
  return (
    <Button size="icon" className="float-right" {...props}>
      <Pencil className="h-4 w-4" />
    </Button>
  )
}

const ResourceDisplay = ({
  resourceEmoji,
  resourceTiles,
  toggleIsEditing,
}: ResourceInternalProps) => {
  const { payouts, odds, houseEdge } = getInfo(resourceTiles)
  return (
    <div>
      <BlockBody>
        {resourceEmoji} bets are made up of{" "}
        {getResourceTileString(resourceTiles)}. The player can bet on these
        numbers as a single bet, and if they appear before a 7 is rolled, then
        the player wins.
      </BlockBody>
      <OddsTable
        betName={`${resourceEmoji} Bets`}
        payouts={{
          [getResourceTileString(resourceTiles)]: payouts,
        }}
        odds={{
          [getResourceTileString(resourceTiles)]: odds,
        }}
        edges={{
          [getResourceTileString(resourceTiles)]: houseEdge,
        }}
      />
      <EditButton onClick={toggleIsEditing} />
    </div>
  )
}

const ResourceFormInput = (props: ResourceFormInputProps) => (
  <Input type="number" {...props} />
)

const ResourceForm = ({
  resourceEmoji,
  resourceCount,
  resourceTiles,
  setResourceTiles,
  toggleIsEditing,
}: ResourceFormProps) => {
  const isFormValid = resourceTiles.every((resourceTile) => {
    return resourceTile > 1 && resourceTile < 13
  })
  return (
    <>
      <BlockBody>Enter the pip for each {resourceEmoji} tile:</BlockBody>
      <div className="-mx-2 flex">
        {Array.from({ length: resourceCount }, (_, index) => (
          <div className="px-2" key={`${resourceEmoji}-${index}`}>
            <ResourceFormInput
              name={`${resourceEmoji}-${index}`}
              value={resourceTiles[index] || 0}
              min={0}
              max={12}
              onChange={(e) => {
                const newResourceTiles = [...resourceTiles]
                newResourceTiles[index] = parseInt(e.target.value)
                setResourceTiles(newResourceTiles)
              }}
            />
          </div>
        ))}
      </div>
      {isFormValid ? (
        <Button onClick={toggleIsEditing}>Save {resourceEmoji}</Button>
      ) : (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Resource tile values need to be between 2 and 12.
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}

export { ResourceBlock }

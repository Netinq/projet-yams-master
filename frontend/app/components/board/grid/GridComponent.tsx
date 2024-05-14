import { SocketContext } from "@/app/contexts/Socket";
import { BOARD_STYLES as STYLES } from "@/assets/styles/components/board/BoardStyles";
import { CASE_STYLES } from "@/assets/styles/components/CaseStyles";
import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { CaseComponent } from "../../CaseComponent";

const Grid = () => {

    const socket = useContext(SocketContext);

    const [displayGrid, setDisplayGrid] = useState(false);
    const [canSelectCells, setCanSelectCells] = useState([]);
    const [grid, setGrid] = useState([]);

    const handleSelectCell = (cellId: string, rowIndex: number, cellIndex: number) => {
        if (canSelectCells) {
            socket.emit("game.grid.selected", { cellId, rowIndex, cellIndex });
        }
    };

    useEffect(() => {
        console.log("inti")
        socket.on("game.grid.view-state", (data) => {
            setDisplayGrid(data['displayGrid']);
            setCanSelectCells(data['canSelectCells'])
            setGrid(data['grid']);
        });
    }, []);

    return (
        <View style={STYLES.gridContainer}>
            {displayGrid &&
                grid.map((row: any[], rowIndex: number) => 
                        row.map((cell: any, cellIndex: number) => (
                            <CaseComponent 
                                key={cell.id} 
                                value={cell.viewContent} 
                                style={[
                                    cell.owner === "player:1" && CASE_STYLES.playerOwnedCell,
                                    cell.owner === "player:2" && CASE_STYLES.opponentOwnedCell,
                                    (cell.canBeChecked && !(cell.owner === "player:1") && !(cell.owner === "player:2")) && CASE_STYLES.canBeCheckedCell
                                ]}
                                onPress={() => cell.canBeChecked && handleSelectCell(cell.id, rowIndex, cellIndex)} 
                                />
                        ))
                )}
        </View>
    );
};
export default Grid;
#!/bin/bash
scan_codebase() {
    SCAN_NUM=2
    (printf "=== SCAN ${SCAN_NUM} ===

MODULES:

" && 
    for d in multi_barcodes_pos pos_access_right_hr pos_payment_transaction pos_transaction_validate pos_user_restrict pos_zero_quantity_restrict product_multi_uom_pos; do 
        printf "
${d}:
" && 
        printf "
VARS:
" && 
        find "$d" -type f -name "*.py" -exec grep -h "^[[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*=" {} \; 2>/dev/null | sed "s/=.*$//" | sort -u | sed "s/^/  /" && 
        printf "
FUNCS:
" && 
        find "$d" -type f -name "*.py" -exec grep -h "^[[:space:]]*def" {} \; 2>/dev/null | sed "s/def //" | sed "s/(.*//" | sort -u | sed "s/^/  /" && 
        printf "
FILES:
" && 
        find "$d" -type f \( -name "*.py" -o -name "*.js" -o -name "*.xml" \) -printf "  %f
" | sort
    done) > scan${SCAN_NUM}.txt
}
